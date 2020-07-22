import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-inv-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.sass']
})
export class SuppliersComponent implements OnInit {

  itemList: any[] = [
    {label: 'C_PART', value: 'Computer parts'},
    {label: 'MOBILE', value: 'Mobile phones'},
    {label: 'MOBILE', value: 'Fruits'},
  ];

  relatedProducts: any[] = [
    {label: 'RAM', isSelected: true},
    {label: 'Monitor', isSelected: false},
    {label: 'Keyboard', isSelected: false},
    {label: 'Motherboard', isSelected: true},
    {label: 'VGA', isSelected: false},
    {label: 'HDD', isSelected: false},
  ];

  selectedCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.selectedCount = this.relatedProducts.filter(pItem => pItem.isSelected).length;
  }

  selectOrDeselect(product) {
    const item = this.relatedProducts.find(productItem => {
      return productItem === product;
    });
    const index = this.relatedProducts.findIndex(productItem => productItem === product);
    item.isSelected = !item.isSelected;
    this.relatedProducts[index] = item;

    this.selectedCount = this.relatedProducts.filter(pItem => pItem.isSelected).length;
  }

}
