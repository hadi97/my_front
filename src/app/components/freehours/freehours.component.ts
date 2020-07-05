import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-freehours',
  templateUrl: './freehours.component.html',
  styleUrls: ['./freehours.component.css']
})
export class FreehoursComponent implements OnInit {
  items : any;

  constructor(private http : HttpClient ) {
    http.get('http://localhost:9000/workingHours').subscribe(data => this.items = data);
   }

  ngOnInit() {
  }

}
