import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginCheckService } from '../../services/login-check.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    public username: string;
    constructor(private loginService: LoginCheckService, private router: Router) {
    }
    public ngOnInit() {
        if (this.loginService.hasAuth) {
            this.username = this.loginService.userName;
        }else {
            this.router.navigate(['/no-access']);
        }
    }

    public logout() {
        this.loginService.hasAuth = false;
        this.loginService.userName = undefined;
        this.router.navigate(['']);
    }
}
