import { Component, OnInit } from '@angular/core';
import {Toast, ToastPackage, ToastrService} from 'ngx-toastr';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

// https://stomp-js.github.io/stomp-websocket/codo/class/Client.html#send-dynamic

@Component({
  selector: 'c-inv-cit-toast',
  templateUrl: './cit-toast.component.html',
  styleUrls: ['./cit-toast.component.sass'],
  preserveWhitespaces: false,
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        opacity: 0,
      })),
      transition('inactive => active', animate('400ms ease-out', keyframes([
        style({
          transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
          opacity: 0,
        }),
        style({
          transform: 'skewX(20deg)',
          opacity: 1,
        }),
        style({
          transform: 'skewX(-5deg)',
          opacity: 1,
        }),
        style({
          transform: 'none',
          opacity: 1,
        }),
      ]))),
      transition('active => removed', animate('400ms ease-out', keyframes([
        style({
          opacity: 1,
        }),
        style({
          transform: 'translate3d(100%, 0, 0) skewX(30deg)',
          opacity: 0,
        }),
      ]))),
    ]),
  ]
})
export class CitToastComponent extends Toast implements OnInit {

  constructor(protected toastrService: ToastrService,
              public toastPackage: ToastPackage) {
    super(toastrService, toastPackage);
  }

  ngOnInit(): void {
  }

}
