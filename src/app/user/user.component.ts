import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  tweetsTittle = 'MIS TWEETS';
  user:User;


  constructor() {

    this.user ={
      id:0,
      nombre:'',
      apellido:'',
      telefono:'',
      usuario:'',
      contraseña:'',

    };
  }

  ngOnInit() {
  }

}
