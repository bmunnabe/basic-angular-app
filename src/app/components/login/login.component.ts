import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginCheckService } from '../../services/login-check.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    public message: any;
    constructor(private loginService: LoginCheckService, private router: Router) {
    }
    public ngOnInit() {
        if (this.loginService.hasAuth) {
            this.router.navigate(['/home']);
        }
    }
    public loginClicked(username, password) {
        if (username === undefined || username === '' || password === undefined || password === '' ) {
            this.message = 'Please enter username and password !';
            return;
        }
        this.loginService.getUserDetails().subscribe(
            (data) => {
                const userDetails = data ? data['userdetails'] : null;
                for (const db of userDetails) {
                    if (db.username === username && db.password === password) {
                        this.message = undefined;
                        this.loginService.hasAuth = true;
                        this.loginService.userName = db.username;
                        this.router.navigate(['/home']);
                        break;
                    }else {
                        this.message = 'Username or password not match';
                    }
                }
            },
            (error) => console.log(error)
        );
    }
}
