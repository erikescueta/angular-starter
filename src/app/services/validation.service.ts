import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class ValidationService {
    private regexSpecialCharacters = /[^a-zA-Z0-9]/;

    constructor() {}

    validateUserName(control: AbstractControl): boolean {
        let isValid = null;
        if (control.value) {
            const hasSpecialCharacters = this.regexSpecialCharacters.test(control.value);
            isValid = !hasSpecialCharacters;
        }
        return isValid;
    }
}
