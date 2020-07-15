import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  navLinkShow: string;
  navLinkHide: string;
  collegeName: string;
  navLinkItems: string[];
  selectedIndex: number;


  constructor() {
  }

  ngOnInit() {
    this.navLinkShow = 'nav-item active';
    this.collegeName = 'RSAS BALLIA';
    this.listNavLinkItems();
  }

  /* creating a array of nav link items  */
  listNavLinkItems() {
    this.navLinkItems = new Array();
    this.navLinkItems.push('HOME');
    this.navLinkItems.push('OUR SCHOOL');
    this.navLinkItems.push('ACADEMICS');
    this.navLinkItems.push('SCHOOL MENUS');
    this.navLinkItems.push('ADMISSIONS');
    this.navLinkItems.push('EVENTS & NEWS');
    this.navLinkItems.push('CONTACT');
  }

  /* adding class to particular li tag in ngfor loop while hovering the li item*/
  setIndex(index: number) {
    this.selectedIndex = index;
    this.navLinkHide = 'nav-item';
  }
  removeIndex(index: number) {
    this.selectedIndex = null;
    this.navLinkShow = 'nav-item active';
  }

}
