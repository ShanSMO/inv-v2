import { Component, OnInit } from '@angular/core';
import {CommonSharedService} from '../common-shared.service';

@Component({
  selector: 'c-inv-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  currentSize: any = 'MAX';
  constructor(private commonSharedService: CommonSharedService) { }

  ngOnInit(): void {
    this.commonSharedService.onAction().subscribe(data => {
      this.currentSize = this.currentSize == 'MAX' ? 'MIN' : 'MAX';
    });
  }

}
