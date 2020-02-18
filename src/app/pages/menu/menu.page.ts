import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private userService: DataService) { }
  menu_title: any = [];
  ngOnInit() {
  }
  public getMenu() {
    return this.userService.getUsers().subscribe((data: any) => {this.menu_title= data; console.log(this.menu_title); })
  }

}
