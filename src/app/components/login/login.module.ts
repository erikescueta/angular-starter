import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ]
})
export class LoginModule {}
