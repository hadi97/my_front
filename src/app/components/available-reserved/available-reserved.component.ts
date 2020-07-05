import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-available-reserved',
  templateUrl: './available-reserved.component.html',
  styleUrls: ['./available-reserved.component.css']
})
export class AvailableReservedComponent implements OnInit {
  id: any; 
  sub: any;
  periods : any;
  reserved : any;

  constructor(private router : Router,private messageService:MessageService, private route: ActivatedRoute,private http : HttpClient) { }
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.id = params.day; // (+) converts string 'id' to a number
      this.http.get(`http://localhost:9000/freeHours/getAvailable`,{params : {day:this.id}}).subscribe(data=>this.periods = data);
      this.http.get(`http://localhost:9000/freeHours/getReserved`,{params : {day:this.id}}).subscribe(data=>this.reserved = data);
   });

  }

}
