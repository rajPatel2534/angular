import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sideBarService : SidebarService) { }

  ngOnInit() {
  }

  changeSidebar(){
    this.sideBarService.changeSidebar();
  }
}
