import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logoutUser(){
    this.router.navigate(['']);
  }

  OpenRolePage(role : String){
    if(role == 'Admin'){
      this.router.navigate(['workarea','admin', 'products']);
    }else if(role == 'User'){
      this.router.navigate(['workarea','admin', 'users']);
    }

  }

}
