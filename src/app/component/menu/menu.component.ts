import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogin:boolean=false
  constructor(
    private auth:AuthService
  ) { 
    this.auth.isAuthenticate()
    .subscribe(data=>{
      this.isLogin=data
    })
  }
  salir(){
    this.auth.logout()
  }
  ngOnInit(): void {
  }

}
