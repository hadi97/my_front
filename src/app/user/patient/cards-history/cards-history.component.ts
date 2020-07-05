import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards-history',
  templateUrl: './cards-history.component.html',
  styleUrls: ['./cards-history.component.css']
})
export class CardsHistoryComponent implements OnInit {

  constructor(private router : Router,private messageService:MessageService, private route: ActivatedRoute, private http: HttpClient) { }
  id: number 
  sub: any;
  visitDetails: any;
  healthcards : any;


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.http.get(`http://localhost:9000/visits/getVisit/${this.id}`).subscribe(data => {this.visitDetails = data;});
      this.http.get(`http://localhost:9000/cards/${this.id}`).subscribe(data => {this.healthcards = data;});
  });

  }
}