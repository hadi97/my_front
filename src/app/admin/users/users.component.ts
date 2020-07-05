import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  items:any;
  doctors:any;
  patients:any;
  allUsers:any;


   /* displayedColumns: string[] = ['id', 'login', 'first_name', 'last_name']; */
   

  constructor(private http: HttpClient,private route : Router) { 
   
  }

  ngOnInit() {
    this.loadData();
  }

  onChange(value) {

     if(value=="Id"){
      this.items=this.allUsers;
     }
     if(value=="Doctor"){
      this.items=this.doctors;
     }

    if(value=="Patient"){
      this.items=this.patients;
     }
}

loadData() {
  
  this.http.get('http://localhost:9000/users/all').subscribe(data => this.allUsers = data
  );

  this.http.get('http://localhost:9000/users/userDoctors').subscribe(data => this.doctors = data);

  this.http.get('http://localhost:9000/users/userPatients').subscribe(data => this.patients = data);
  
}

deleteUser(event,userId) {
  
  this.http.delete(`http://localhost:9000/users/${userId}`).subscribe();
  this.route.navigate(['/users']);
  window.location.reload();
  this.loadData();  
  
}

}
