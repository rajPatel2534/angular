import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  sideBarSubject : BehaviorSubject<boolean> = new BehaviorSubject(true);
  isSidebarOpened : boolean = true;
  changeSidebar(){
    this.isSidebarOpened = !this.isSidebarOpened;
    this.sideBarSubject.next(this.isSidebarOpened);
  }
}
