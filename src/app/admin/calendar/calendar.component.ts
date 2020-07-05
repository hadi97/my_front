import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  items:any; 

  constructor(private http: HttpClient) {
    http.get('http://localhost:9000/workingHours').subscribe(data => this.items = data);
   }

  ngOnInit() {
  }

}
