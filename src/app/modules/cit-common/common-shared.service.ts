import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonSharedService {

  private subject = new Subject<any>();

  showHideSideBar() {
    this.subject.next({action: 'CLICKED'});
  }

  onAction(): Observable<any> {
    return this.subject.asObservable();
  }

}
