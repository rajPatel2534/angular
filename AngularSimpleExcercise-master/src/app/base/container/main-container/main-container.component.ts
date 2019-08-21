import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  isOpened : boolean;
  constructor( private sideBarService : SidebarService) { }

  ngOnInit() {
    this.sideBarService.sideBarSubject.subscribe(isOpened => {
      this.isOpened = isOpened;
    });
    
  }

}
