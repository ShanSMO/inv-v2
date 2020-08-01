import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessagingService} from '../../../services/messaging.service';
import {Subscription} from 'rxjs';
import {CommonSharedService} from '../common-shared.service';
import * as Stomp from 'stompjs';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'c-inv-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass'],
})
export class TopNavComponent implements OnInit, OnDestroy {

  constructor(private messagingService: MessagingService,
              private toast: ToastrService,
              private commonSharedService: CommonSharedService) {
  }

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
  ws: any;

  ngOnInit(): void {
    this.loadNotifications();
    this.subscription = this.messagingService.onMessage().subscribe(data => {
      this.messages.unread.push(
        {
          id: 1,
          title: 'Pending Payment',
          message: 'Please pay pending payments for start working, you have 7 days for pay.',
          dateTime: new Date()
        },
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleSidebar() {
    this.currentSidebarSize = this.currentSidebarSize === 'MAX' ? 'MIN' : 'MAX';
    this.commonSharedService.showHideSideBar();
  }

  loadNotifications() {
    const that = this;
    const socket = new WebSocket(environment.CIT_WS_URL);
    this.ws = Stomp.over(socket);
    this.ws.debug = null;
    this.ws.connect({}, (data) => {
      that.ws.subscribe('/cit/topic/messages', (message) => {
        const messageC = JSON.parse(message.body);
        switch (messageC.messageType) {
          case 'NEW_NOTIFICATION': this.notifications.unread.push({}); break;
          default: this.messages.unread.push({}); break;
        }
        this.playSound();
        this.toast.show(JSON.parse(message.body).message, 'Hi Shanaka,',
          {
            positionClass: 'toast-bottom-right',
            easing: 'ease-out',
            timeOut: 10000,
            easeTime: 1000,
            progressBar: true
          }
          );
      });
    });
  }

  playSound() {
    const audio = new Audio();
    audio.src = 'assets/audio/beep.wav';
    audio.load();
    audio.play();

    // this.ws.send('/cit/app/messages', {}, JSON.stringify({
    //   id: 1,
    //   message: '-----',
    //   messageType: 'NEW_EMAIL'
    // }));
  }

}
