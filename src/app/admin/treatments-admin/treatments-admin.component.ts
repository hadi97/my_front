import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-treatments-admin',
  templateUrl: './treatments-admin.component.html',
  styleUrls: ['./treatments-admin.component.css']
})
export class TreatmentsAdminComponent implements OnInit {
  items:any;

  constructor(private http: HttpClient) {
    
   }

  ngOnInit() {
    this.loadData();
  }

    loadData() {
      this.http.get('http://localhost:9000/treatments').subscribe(data => this.items = data);

    }


    
    deleteTreatment(event,treatmentId) {
      
      this.http.delete(`http://localhost:9000/treatments/${treatmentId}`).subscribe(data =>{this.loadData();});
      
      
    }

}
