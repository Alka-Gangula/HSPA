import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private route:Router,private alertifyService:AlertifyService){}
  loggedinUser!:string;
  loggedin(){
     this.loggedinUser=(localStorage.getItem('token') as string);
    return this.loggedinUser;
  }
  Logout(){
    this.route.navigate(['user/login'])
    this.alertifyService.success("You have been successfully logged out")

    return localStorage.removeItem('token');

  }
}
