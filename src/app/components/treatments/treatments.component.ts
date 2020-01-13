import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {
  items : any 
  
  constructor(private http : HttpClient) {
    http.get('http://localhost:8080/treatments').subscribe(data => this.items = data);
   }

  ngOnInit() {
  }

}
