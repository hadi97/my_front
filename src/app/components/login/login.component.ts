import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { LoginDto } from 'src/app/authentication/login-dto';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn : boolean = false;
  roles: string[] = [];
  private loginInfo: LoginDto;
  isLoginFailed = false;
  errorMessage = '';
  regexpEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
  correctData:boolean;
  warningMessage:string;
  
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  loginUser(event : any){
    console.log("Start loginUser ");
    event.preventDefault()
    const target = event.target;
    const email=target.querySelector('#username').value;
    const password=target.querySelector('#password').value;
    console.log("email: "+ email);
    console.log("pass: "+ password);

    if(this.regexpEmail.test(email)==true ){
      this.correctData=true;
    }else{
      this.correctData=false;
      this.warningMessage="Invalid email";
    }

    this.loginInfo = new LoginDto(
      email,
      password);
    
      if(this.correctData==true){
    this.authService.login(this.loginInfo).subscribe(
      data => {
        console.log("Login Info: " + data.username);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.tokenStorage.saveUserId(data.userId);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        
        this.roles.every(role => { console.log("Role Info: " + role); return true});
        
        this.router.navigate(['/']);
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.warningMessage="Incorrect email or password !";
      }
    );
    }
   
  }

  reloadPage() {
    window.location.reload();
  }

}
