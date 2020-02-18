import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  constructor(private userService: DataService, private router: Router) { }
  users: any = [];
  ngOnInit() {
    this.getData();
  }

  public getData(){

    return this.userService.getUsers().subscribe((data: any) => {this.users = data; console.log(this.users);});
  }
  openMenu() {
    this.router.navigateByUrl('/menu');
  }
}
