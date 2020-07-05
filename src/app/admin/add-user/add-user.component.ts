import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  userRole: string = "patient";

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  createUser(event) {
    event.preventDefault()
    const target = event.target;
    console.log("add user ");
    const email = target.querySelector('#email').value;
    const firstName = target.querySelector('#firstName').value;
    const lastName = target.querySelector('#lastName').value;
    const phone = target.querySelector('#phone').value;
    const password = target.querySelector('#password').value;

    if (this.userRole === "patient") {
      const address = target.querySelector('#address').value;
      const pesel = target.querySelector('#pesel').value;
      const sex = target.querySelector('#sex').value;

      let patient = {
        username: email,
        passwordHash:password,
        firstName: firstName,
        lastName: lastName,
        address: address,
        pesel:pesel,
        phone: phone,
        sex: sex,
      };
      
      this.http.post('http://localhost:9000/patients', patient).subscribe(data => {
        this.router.navigateByUrl("/users");
      });
    } else {
      let doctor = {
        phone: phone,
        username: email,
        passwordHash:password,
        firstName: firstName,
        lastName: lastName
      };

      this.http.post('http://localhost:9000/doctors', doctor).subscribe(data => {
        this.router.navigateByUrl("/users");
      });
    }

  }

  onChange(userRoleValue) {
    this.userRole = userRoleValue;
    //alert(this.userRole);
  }

}
