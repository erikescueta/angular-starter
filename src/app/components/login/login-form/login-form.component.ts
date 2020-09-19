import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from './../../../services/validation.service';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
    public loginForm: FormGroup;
    public validUserName = true;
    public validForm = false;
    private validateForm$ = new Subject();
    private destroy$ = new Subject();

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private validationService: ValidationService
    ) {}

    ngOnInit(): void {
        this.createForm();
        this.validateForm$
            .pipe(takeUntil(this.destroy$))
            .pipe(debounceTime(300))
            .subscribe((validate) => {
                if (validate) {
                    this.validateFormValues();
                }
            });
    }

    createForm(): void {
        this.loginForm = this.formBuilder.group({
            userName: [''],
        });
    }

    validateForm(): void {
        this.resetValidations();
        this.validateForm$.next(true);
    }

    validateFormValues(): void {
        const validUserName = this.validationService.validateUserName(this.loginForm.get('userName'));

        this.validUserName = validUserName;

        console.log('validUserName', validUserName);

        if (!validUserName) {
            this.validForm = false;
        } else {
            this.validForm = true;
        }
    }

    resetValidations(): void {
        this.validUserName = true;
        this.validForm = false;
    }

    resetForm(): void {
        this.loginForm.reset();
    }

    login(): void {
        if (this.validUserName) {
            this.authService.login();
        }
    }
}
