import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideConfig = {
    spaceBetween: 10,
   centeredSlides: true,
   slidePerView: 1.6
  }
  constructor( private userServices: DataService) { }
  userHome: any = [];
  ngOnInit() {
    this.getData();
  }



  public getData(){
     return this.userServices.getUsers().subscribe((data: any) => {this.userHome = data; console.log(this.userHome);});
  }

}
