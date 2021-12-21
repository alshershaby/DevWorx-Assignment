import { animate,query,stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import users from '../_files/users.json';
@Component({
  selector: 'app-worx',
  templateUrl: './worx.component.html',
  styleUrls: ['./worx.component.css'],
  animations: [
   
  ]
})
export class WorxComponent  {

  users:{name:string,code:string,imagePath:string}[]=users;


displayUsers(){

  
  for(let user = 0; user<users.length;user++){
    let codes = users[user].code ;
    let usersCodes = users[user].code.split("");

console.log(usersCodes);
}

}




  ngOnInit(): void {
  }

  constructor() {
    this.displayUsers();
  }

  

}
