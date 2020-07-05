import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpDto } from 'src/app/authentication/signup-dto';
import { Observable } from 'rxjs';
import { LoginDto } from 'src/app/authentication/login-dto';
import { JwtResponse } from 'src/app/authentication/jwt-reponse';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private loginUrl = 'http://localhost:9000/auth/login';
  private signupUrl = 'http://localhost:9000/auth/register';
  
  constructor(private http : HttpClient) { }

  login(loginRequest: LoginDto): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, loginRequest, httpOptions);
  }
  

  register(info: SignUpDto): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

}
