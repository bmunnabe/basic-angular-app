import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { LoginCheckService } from '../../services/login-check.service';

@Component({
    selector: 'app-signup-access',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
    // encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
    public signupForm: FormGroup;
    constructor(private loginService: LoginCheckService, private fb: FormBuilder) {
    }
    public ngOnInit() {
        this.signupForm = this.fb.group({
            username: ['' , Validators.required],
            password: ['' , Validators.required],
            address: ['' ],
            email: ['' , Validators.required],
            sex: ['' , Validators.required]
        });
    }
}
