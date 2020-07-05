import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-my-visits',
  templateUrl: './my-visits.component.html',
  styleUrls: ['./my-visits.component.css']
})

export class MyVisitsComponent implements OnInit {
  public searchString: string;
  userRole:string;
  userId: string;
  items:any;
  pastItems: any;
  confirm : any;
  username:string;
  constructor(private info: UserInfoService,private messageService:MessageService,private http: HttpClient, private tokenStorage: TokenStorageService) {
    
   }
   loadData(){
    this.messageService.currentMessage.subscribe(message => this.userRole = message);
    this.info.currentUserName.subscribe(message => this.username = message);
    this.userId = this.tokenStorage.getUserId();
    console.log(this.username);
   // alert(this.userRole);
    this.http.get(`http://localhost:9000/visits/getComing/${this.username}`).subscribe(data => this.items = data);
    this.http.get(`http://localhost:9000/visits/getPast/${this.username}`).subscribe(data => this.pastItems = data);
    this.http.get('http://localhost:9000/visits/getToBeConfirmed').subscribe(data => this.confirm = data);
   }
   
  ngOnInit() {
      this.loadData();
  }

 
  cancelVisit(event,visitId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

     this.http.put(`http://localhost:9000/visits/cancel/${visitId}`,{headers: headers}).subscribe(
       data =>this.loadData()
     );

   }

   confirmVisit(event,visitId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

     this.http.put(`http://localhost:9000/visits/confirm/${visitId}`,{headers: headers}).subscribe(
       data =>this.loadData()
     );

   }

}
