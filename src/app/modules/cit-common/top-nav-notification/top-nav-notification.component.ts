import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'c-inv-top-nav-notification',
  templateUrl: './top-nav-notification.component.html',
  styleUrls: ['./top-nav-notification.component.sass']
})
export class TopNavNotificationComponent implements OnInit {

  @Input() messages: any = null;
  @Input() type: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
