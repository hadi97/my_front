import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding-hours',
  templateUrl: './adding-hours.component.html',
  styleUrls: ['./adding-hours.component.css']
})
export class AddingHoursComponent implements OnInit {

  items:any;

  constructor(private http: HttpClient,private router: Router) {
    
   }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get('http://localhost:9000/doctors').subscribe(data => this.items = data);
  }

  addNewWorkingHour(event) {
    event.preventDefault()
    const target = event.target;

    const date =target.querySelector('#date').value;
    const startDate =target.querySelector('#start').value;
    const endDate =target.querySelector('#end').value;

    let workingHour = {date: date, dateStart: startDate, dateStop: endDate};

    this.http.post('http://localhost:9000/workingHours', workingHour).subscribe(data => {
      this.router.navigateByUrl("/calendar");
    });



  }

}
