import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private subject = new Subject<any>();

  constructor() { }

  sendMessage() {
    this.subject.next({ text: 'message' });
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
