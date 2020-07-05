import { Component } from '@angular/core';
import { TokenStorageService } from './services/auth/token-storage.service';
import { MessageService } from './services/message.service';
import { UserInfoService } from './services/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private roles: string[];
  userRole:string="";

  
  constructor(private tokenStorage: TokenStorageService,private service:MessageService, private userInfoService: UserInfoService) { }
    
  newMessage(message:string) {
   this.service.changeMessage(message);
  }

  ngOnInit(): void {
    //this.service.currentMessage.subscribe(message => this.userRole = message); 
    console.log("On init App Comp: ");
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'admin') {
          this.userRole = 'admin';
          return false;
        } else if (role === 'doctor') {
          this.userRole = 'doctor';
          return false;
        } else if (role === 'patient') {
          this.userRole = 'patient';
          return false;
        }
        this.userRole = 'na';
        return true;
      });
    } else {
      //user as default when no authorization
      this.userRole = 'user'; 
    }
    console.log("User: " + this.userRole);
    this.newMessage(this.userRole);

    //set user name
    if(this.userRole !== 'na'){
      this.userInfoService.changeUserNameByEmail(this.tokenStorage.getUsername());
    }
    

  
  }
  title = 'Clinic';
}
