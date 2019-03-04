import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { User } from '../user/User';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User

  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  login() : void {
    if(this.user.nombre != null && this.user.apellido != null){
     this.router.navigate(["user"]);
    }else {
      alert("Usuario y/o contraseña incorrectos");
    }
  }
  }