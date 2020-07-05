import { Component, OnInit, Input } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  @Input() userRole:string;
  userName:string;

  constructor(private userInfoService: UserInfoService,
    private tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
    this.userInfoService.currentUserName.subscribe(message => this.userName = message);
  }

  logoutUser(event) {
    this.tokenStorageService.signOut();
    this.router.navigate(['/welcome']);
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }

}
