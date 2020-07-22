import { Component, OnInit } from '@angular/core';
import {MessagingService} from '../../../services/messaging.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'c-inv-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
})
export class PosComponent implements OnInit {

  constructor(private messagingService: MessagingService) { }

  ngOnInit(): void {

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

}
