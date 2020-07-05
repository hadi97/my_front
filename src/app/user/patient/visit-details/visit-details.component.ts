import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.css']
})
export class VisitDetailsComponent implements OnInit {
  id: number 
  sub: any;
  visitDetails: any;
  healthcards : any;
  userRole:string;
   archiveVisit:boolean=false;
   note:string;
   internalNote:string;
   advice:string;
   showHistory:boolean=false;
   
  constructor(private router : Router,private messageService:MessageService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.messageService.currentMessage.subscribe(message => this.userRole = message);
   // let visit : any= {
   ////   visitId:Number,
   //   doctorName: String,
  //    patientName:String,
   //   treatmentName:String,
 //     visitDate:Date,
  //    isCompleted:Boolean
  //  }
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.http.get(`http://localhost:9000/visits/getVisit/${this.id}`).subscribe(data => {this.visitDetails = data;});
      this.http.get(`http://localhost:9000/cards/${this.id}`).subscribe(data => {this.healthcards = data;});
   });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setVisitNotes(event,visitId){
    event.preventDefault()
    const target = event.target;
    const note=target.querySelector('#note').value;
    const advice=target.querySelector('#advice').value;
    this.note=note;
    this.advice=advice;
    this.archiveVisit=true;
    console.log(visitId+advice+note);
    this.http.put(`http://localhost:9000/visits/update`,{},{params : {visitId:visitId,advice:advice,notes:note}}).subscribe(data => {
      this.router.navigateByUrl("/myvisits");
    });
    }

  showHealthHistory(event){
    event.preventDefault()
   this.showHistory=true;
  }


}
