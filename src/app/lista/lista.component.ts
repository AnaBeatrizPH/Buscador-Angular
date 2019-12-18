import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/userID'; 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private UserService : UserService) { }
  
  users: User[];
    ngOnInit() {
      this.findAll(); 
  }

  findAll(){
    this.UserService.getAll().subscribe((userOut: User[])=> {this.users = userOut;})
  }

}
