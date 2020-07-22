import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MessagingService} from '../../../services/messaging.service';
import {Subscription} from 'rxjs';
import {CommonSharedService} from '../common-shared.service';

@Component({
  selector: 'c-inv-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass'],
})
export class TopNavComponent implements OnInit, OnDestroy {

  currentSidebarSize: any = 'MAX';
  messages: any = {
    unread: [],
    read: [
      {
        id: 1,
        title: 'Pending Payment',
        message: 'Please pay pending payments for start working, you have 7 days for pay.If you couldn`t pay , the account will disabled.',
        dateTime: new Date()
      },
      {id: 1, title: 'Purchase order request', message: 'Please pay pending payments for start working', dateTime: new Date()},
      {id: 1, title: 'Purchase order request', message: 'Please pay pending payments for start working', dateTime: new Date()},
      {id: 1, title: 'Purchase order request', message: 'Please pay pending payments for start working', dateTime: new Date()}
    ]
  };

  notifications: any = {
    unread: [],
    read: [
      {
        id: 1,
        title: 'Pending Payment',
        message: 'Please pay pending payments for start working, you have 7 days for pay.If you couldn`t pay , the account will disabled.',
        dateTime: new Date()
      },
    ]
  };

  subscription: Subscription;

  constructor(private messagingService: MessagingService,
              private commonSharedService: CommonSharedService) {
  }

  ngOnInit(): void {
    this.subscription = this.messagingService.onMessage().subscribe(data => {
      this.messages.unread.push(
        {
          id: 1,
          title: 'Pending Payment',
          message: 'Please pay pending payments for start working, you have 7 days for pay.If you couldn`t pay , the account will disabled.',
          dateTime: new Date()
        },
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleSidebar() {
    this.currentSidebarSize = this.currentSidebarSize == 'MAX' ? 'MIN' : 'MAX';
    this.commonSharedService.showHideSideBar();
  }

}
