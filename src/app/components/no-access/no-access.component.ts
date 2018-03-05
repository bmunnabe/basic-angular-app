import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginCheckService } from '../../services/login-check.service';

@Component({
    selector: 'app-no-access',
    templateUrl: 'no-access.component.html',
    styleUrls: ['no-access.component.css']
    // encapsulation: ViewEncapsulation.None
})
export class NoAccessComponent implements OnInit {
    constructor(private loginService: LoginCheckService) {
    }
    public ngOnInit() {
    }
}
