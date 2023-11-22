import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }
  Users: any = [];
  temp: any = [];
  
  getUser(){
    this.Users.push(this.temp);
  }
  setUser(u: any){
    this.temp = u;
  }
}
