import { Component, OnInit } from '@angular/core';
import{User} from './../model/userId'; 
import{UserService} from './../service/user.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  id: number; 
  user: User = new User(0, 0, "", false);
  constructor(private UserService: UserService)  { }

  ngOnInit() {
  }
  ProcuraClick(){
  this.UserService.getId(this.id).subscribe((userOut:User)=>{this.user = userOut;})}
}
