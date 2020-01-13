import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  items:any; 
  constructor(private http: HttpClient) {
    http.get('http://localhost:8080/doctors').subscribe(data => this.items = data);
   }

  ngOnInit() {
  }

}
