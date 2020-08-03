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

  products: any[] = [
    {id: 1, code: '', itemName: 'Sunlight Soap', unitPrice: 55.00},
    {id: 2, code: '', itemName: 'Red Rice', unitPrice: 90.00},
    {id: 3, code: '', itemName: 'Signal Tooth Brush', unitPrice: 100.00},
    {id: 4, code: '', itemName: 'Baby Soap', unitPrice: 55.00},
    {id: 5, code: '', itemName: 'Kohomba Colongue', unitPrice: 155.00},
    {id: 6, code: '', itemName: 'Munchee Super Cream Cracker', unitPrice: 80.00},
    {id: 7, code: '', itemName: 'Chocolate Buiscuts', unitPrice: 55.00},
    {id: 8, code: '', itemName: 'White Chocolate (Cadbuery)', unitPrice: 355.00}
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
  itemList: any[] = [];

  constructor(private messagingService: MessagingService,
              private formBuilder: FormBuilder) { }

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
      subTotal: new FormControl(1000),
      discount: new FormControl(0),
      tax: new FormControl(0),
      total: new FormControl(1000)
    });
  }

  setItemFormArrayItem(item): FormGroup {
    return this.formBuilder.group({
      itemId: new FormControl(item.id),
      itemName: new FormControl(item.itemName),
      itemCode: new FormControl(item.code),
      qty: new FormControl(1),
      total: new FormControl(0),
      unitPrice: new FormControl(item.unitPrice)
    });
  }

  addToCart(item) {
    this.itemFormArray = this.billForm.get('items') as FormArray;
    this.itemFormArray.push(this.setItemFormArrayItem(item));
  }
}
