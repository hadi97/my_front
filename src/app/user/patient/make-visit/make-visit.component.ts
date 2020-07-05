import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-make-visit',
  templateUrl: './make-visit.component.html',
  styleUrls: ['./make-visit.component.css']
})
export class MakeVisitComponent implements OnInit {

  services: any; //services from backend
  subscription: Subscription;
  userRole: string; //getting this variable from backend
  success: boolean = false;
  warning: boolean = false;
  message: string;
  private htt: HttpClient;
  treatmentstime: any;
  private pesel: String;
  private visitTreatment: any;
  private myDate: any;
  private visitData: any;
  private sth:any;
  private username:any;
  private periods:any;
  private hour : any;
  private selected:string;
  constructor(private userInfoService: UserInfoService,private messageService: MessageService, private http: HttpClient, private tokenService: TokenStorageService,
  private router: Router) {
    this.htt = http;
    http.get('http://localhost:9000/treatments').subscribe(data => this.services = data);
    http.get('http://localhost:9000/freeHours').subscribe(data => this.treatmentstime = data);
    http.get('http://localhost:9000/freeHours/getDays').subscribe(data => this.myDate = data);
  
  }

  ngOnInit() {
    this.userInfoService.currentUserName.subscribe(message => this.username = message);
    this.messageService.currentMessage.subscribe(message => this.userRole = message);
    //alert(this.userRole);
  }

  
  bookVisit(event : any) { //first step to book visit !!!
    event.preventDefault()
    const target = event.target;
    this.visitData = target.querySelector('#visitData').value;
    this.visitTreatment = target.querySelector('#visitTreatment').value;
    this.hour = target.querySelector('#visitTime').value;
    console.log(this.tokenService.getUserId);
    if (this.userRole === 'doctor') {
      this.pesel = target.querySelector('#pesel').value;
      if (this.pesel.length === 11) {
        //alert('1');
        this.success = true;
        this.message = 'First step to book a visit is finished ';
        this.warning = false;
      } else if (this.pesel.length === 0) {
        this.message = " PESEL must filled";
        this.warning = true;
      } else {
        this.message = " Invalid PESEL !"
        this.warning = true;
      }
    } else if (this.userRole === 'patient') {
      this.message = 'First step to book a visit is finished ';
      this.success = true;
    }
    console.log("before save :  "+ this.visitData);
    // const password=target.querySelector('#password').value;

  }

  saveBooking(event) {
    event.preventDefault()
    const target = event.target;

    const medicines = target.querySelector('#medicines').value;
    const diseases = target.querySelector('#diseases').value;
    const allergy = target.querySelector('#allergy').value;

   let treatment;

    


    console.log("save :  "+ this.visitData);
    console.log("user id "+this.hour);
    let visit = {
      medicines: medicines,
      disease: diseases,
      allergy: allergy,
      doctorId: 1,
      treatmentId: this.visitTreatment,
      visitDate: this.visitData,
      period: this.hour,
      username: this.username,
      patientPesel: this.pesel

    };
    this.http.post('http://localhost:9000/visits', visit).subscribe();
    this.message = "Visit is reserved !";
    setTimeout(()=>{this.router.navigate(['/myvisits']);},2000);
  }

  updateVisitDate(event:any){
    event.preventDefault()
    const target = event.target;
    this.visitData = target.querySelector('#visitData').value;
    console.log(this.visitData); 

      console.log("znalazlem"+ this.visitData);
    this.http.get(`http://localhost:9000/freeHours/getDay`,{params : {date:this.visitData}}).subscribe(data=>this.periods = data);

  }
//  updateVisitType(event) {//to do make dynamic
 //   this.htt.get('http://localhost:9000/visit/items/treatment/1')
//      .subscribe(message => this.treatmentstime = message);
  //}

}
