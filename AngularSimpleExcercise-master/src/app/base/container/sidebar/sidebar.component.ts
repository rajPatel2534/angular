import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isOpened : boolean;
  constructor(private router: Router, private sideBarService : SidebarService,private route : ActivatedRoute) { }

  ngOnInit() {
    this.sideBarService.sideBarSubject.subscribe(isOpened => {
      this.isOpened = isOpened;
    });

    this.setSelectedItem(this.route.children[0].url['value'][0].path);
  }
  private sideBarItems: string[] = ['Date', 'Number', 'BootStrap'];
  private selectedIndex = 0;

  setIndex(index: number) {
    this.selectedIndex = index;
    let temproute = this.selectedIndex == 0 ? '/date' : this.selectedIndex == 1 ? '/number' : '/bootstrap';
    this.router.navigate([temproute])
  }

  setSelectedItem(path : string){
    if(path == 'date') this.selectedIndex = 0;
    else if (path == 'number') this.selectedIndex = 1;
    else if (path == 'bootstrap') this.selectedIndex  = 2;
  }
}
