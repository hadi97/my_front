import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private userName = new BehaviorSubject('Unknown user');
  currentUserName = this.userName.asObservable();
  private currentUser: any;

  constructor(private http: HttpClient) { }

  changeUserNameByEmail(name: string) {
    console.log("UserInfoService: " + name); //TO DO change for email
    //this.http.get('http://localhost:8080/users/email/'+email).subscribe(data => this.currentUser = data);
    //this.userName.next(this.currentUser.first_name + ' ' + this.currentUser.last_name);
    this.userName.next(name);
  }
}
