import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginCheckService } from '../../services/login-check.service';

@Component({
    selector: 'app-not-found',
    templateUrl: 'not-found.component.html',
    styleUrls: ['not-found.component.css'],
    // encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent implements OnInit {
    constructor(private loginService: LoginCheckService) {
    }
    public ngOnInit() {
    }
}
