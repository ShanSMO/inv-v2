import {Component, OnInit} from '@angular/core';
import {MessagingService} from '../../../services/messaging.service';
import Swal from 'sweetalert2';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'c-inv-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.sass'],
})
export class PosComponent implements OnInit {

  constructor(private messagingService: MessagingService,
              private formBuilder: FormBuilder) { }

  paidAmount = 0;
  products: any[] = [
    {id: 1, code: 'SS-01', itemName: 'Sunlight Soap', unitPrice: 55.00},
    {id: 2, code: 'RR-01', itemName: 'Red Rice', unitPrice: 90.00},
    {id: 3, code: 'ST-01', itemName: 'Signal Tooth Brush', unitPrice: 100.00},
    {id: 4, code: '', itemName: 'Baby Soap', unitPrice: 55.00},
    {id: 5, code: '', itemName: 'Kohomba Colongue', unitPrice: 155.00},
    {id: 6, code: '', itemName: 'Munchee Super Cream Cracker', unitPrice: 80.00},
    {id: 7, code: '', itemName: 'Chocolate Buiscuts', unitPrice: 55.00},
    {id: 8, code: '', itemName: 'White Chocolate (Cadbuery)', unitPrice: 355.00},
    {id: 9, code: '', itemName: 'Elephant House Ice Cream (4L)', unitPrice: 355.00},
    {id: 10, code: '', itemName: 'Jack Macarol Salmon', unitPrice: 255.00},
    {id: 11, code: '', itemName: 'Highland Milk Powder (2Kg)', unitPrice: 1500.00},
  ];
  billForm: FormGroup = new FormGroup({
    customerId: new FormControl(),
    tellerId: new FormControl(),
    dateTime: new FormControl(),
    currency: new FormControl(),
    items: new FormArray([]),
    subTotal: new FormControl(),
    discount: new FormControl(),
    tax: new FormControl(),
    total: new FormControl()
  });
  itemFormArray: FormArray;
  balance = 0;

  ngOnInit(): void {
    this.setBillForm();
  }

  test() {
    this.messagingService.sendMessage();
    // https://sweetalert2.github.io/#usage
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
  }

  setBillForm() {
    this.billForm = this.formBuilder.group({
      customerId: new FormControl('0001'),
      tellerId: new FormControl('0001'),
      dateTime: new FormControl(new Date()),
      currency: new FormControl({code: 'LKR', symbol: 'Rs.'}),
      items: new FormArray([]),
      subTotal: new FormControl(0),
      discount: new FormControl(0),
      tax: new FormControl(0),
      total: new FormControl(0)
    });
  }

  setItemFormArrayItem(item): FormGroup {
    return this.formBuilder.group({
      itemId: new FormControl(item.id),
      itemName: new FormControl(item.itemName),
      itemCode: new FormControl(item.code),
      qty: new FormControl(1),
      total: new FormControl(item.unitPrice * 1),
      unitPrice: new FormControl(item.unitPrice)
    });
  }

  addToCart(item) {
    this.itemFormArray = this.billForm.get('items') as FormArray;
    const formItem = this.itemFormArray.controls.find(product => {
      return product.value.itemId === item.id;
    });

    if (formItem != null) {
      formItem.get('qty').patchValue(formItem.get('qty').value + 1);
      formItem.get('total').patchValue(formItem.get('qty').value * formItem.get('unitPrice').value);
    } else {
      this.itemFormArray.push(this.setItemFormArrayItem(item));
    }

    this.setTotalValue();
  }

  updatePriceTotal(event, itemArrayId) {
    this.itemFormArray = this.billForm.get('items') as FormArray;
    const item = this.itemFormArray.at(itemArrayId).value;
    this.itemFormArray.at(itemArrayId).get('total').setValue(item.unitPrice * item.qty);
    this.setTotalValue();
  }

  setTotalValue() {
    let total = 0;
    this.itemFormArray = this.billForm.get('items') as FormArray;
    for (const item of this.itemFormArray.value) {
      total = total + item.total;
    }
    this.billForm.get('subTotal').setValue(total);
    this.billForm.get('total').setValue(this.billForm.get('subTotal').value - this.billForm.get('discount').value);
  }

  removeItem() {

  }

  setBalance() {
    if (this.billForm.get('total').value > 0) {
      this.balance = this.paidAmount - this.billForm.get('total').value;
    }
  }

}
