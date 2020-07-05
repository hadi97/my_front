import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input() userRole:string;
  username:string;
  items : any;
  userId : number;
  name : string;
  
  constructor(private userInfoService: UserInfoService,
    private tokenStorageService: TokenStorageService,
    private router: Router,private http : HttpClient) { }

  ngOnInit() {

    this.userInfoService.currentUserName.subscribe(message => this.username = message);
    console.log("my user name : "+this.username);
  //  let params = new HttpParams().set(
  //    "username" , this.username
  //  ); 
   // this.http.get('http://localhost:9000/users/getName',{params : params})
   // .subscribe(data => this.items = data);

  }
  
  logoutUser(event) {
    this.tokenStorageService.signOut();
    this.router.navigate(['/welcome']);
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }

}
