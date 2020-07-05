import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-treatment',
  templateUrl: './add-treatment.component.html',
  styleUrls: ['./add-treatment.component.css']
})
export class AddTreatmentComponent implements OnInit {


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  addTreatment(event) {
    event.preventDefault()
    const target = event.target;
    console.log("add treatment ");
    const treatmentName=target.querySelector('#treatmentName').value;
    const description=target.querySelector('#description').value;
    const period=target.querySelector('#period').value;
    console.log("add treatment ");console.log("add treatment "+treatmentName);
    let treatment = {treatmentName:treatmentName,description:description,duration:period};

    this.http.post('http://localhost:9000/treatments', treatment).subscribe(data => {
      this.router.navigateByUrl("/admin-treatment");
    });

    

  }

}
