import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SignUpDto } from 'src/app/authentication/signup-dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  signUpDto : SignUpDto; 
  isSignedUp : boolean = false;
  error = '';
  warning:string;
  validData:boolean=true;

  registerUser(event : any){
    event.preventDefault()
    const target = event.target;

    const surname=target.querySelector('#surname').value;
    const name=target.querySelector('#name').value;
    const pesel=target.querySelector('#pesel').value;
    const birthdate=target.querySelector('#birthdate').value;
    const city=target.querySelector('#city').value;
    const address=target.querySelector('#address').value;
    const zipcode=target.querySelector('#zipcode').value;
    const sex=target.querySelector('#sex').value;
    const email=target.querySelector('#email').value;
    const password=target.querySelector('#password').value;
    const phone=target.querySelector('#phone').value;
     
    //check if there are blank inputs
    if(this.ifBlankInputsExist(surname,name,pesel,birthdate,city,address,zipcode,sex,email,password,phone)==true
      ){
     this.warning="All fields are required !";
     this.validData=false;
      }else if(this.validateEmail(email)==false){
        this.warning="Invalid email format";
       this.validData=false;
      }else if(this.validatePesel(pesel)==false){
        this.validData=false;
        this.warning="Invalid Pesel format";
      }else if(this.validatePassword(password)==false){
        this.validData=false;
        this.warning="Password must be must contain at least 8 characters.";
      }else
        this.validData=true;
    //
    this.signUpDto = new SignUpDto(
      email,
      password,
      name,
      surname,
      pesel,
      city,
      address,
      zipcode,
      sex,
      phone
      );

      if(this.validData==true){
      this.authService.register(this.signUpDto).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
      },
      error  => {
        console.log(error);
        this.error = error.error.message;
        this.isSignedUp = false;
      }
    );
    }
  }

  ifBlankInputsExist(surname : any,name : any,pesel : any,birthdate : any,city : any,address : any,zipcode : any,sex :any,email : any,password: any,phone: any){
    if(surname.length == 0 || name.length == 0 || pesel.length ==0 || birthdate.length ==0 || city.length ==0
      || address.length==0 || zipcode.length==0 || sex.length ==0 || email.length==0 || password.length==0 || phone.length==0
      ) 
      return true; //there are blank places
        
    return false; //there are not blank inputs
  }


  validateEmail(email : any){
    const regexpEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'); //validation 
    if(regexpEmail.test(email)==false)
      return false;
    
    return true;
  }


  validatePesel(pesel:any){
    const regexpPesel = new RegExp('[0-9]{11}'); //validation 
    if(regexpPesel.test(pesel)==false)
      return false;
    return true;
  }

  validatePassword(password : any){
    if(password.length< 8)
      return false;    
    return true;  
  }


}
