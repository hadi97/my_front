import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  items:any;

  constructor(private http: HttpClient) {

   }

   loadData() {
     this.http.get('http://localhost:9000/visits/all').subscribe(data => this.items = data);
   }


   cancelVisit(event,visitId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

     this.http.put(`http://localhost:9000/visits/cancel/${visitId}`,{headers: headers}).subscribe(
       data =>this.loadData()
     );

   }

  ngOnInit() {
    this.loadData();
  }

}
