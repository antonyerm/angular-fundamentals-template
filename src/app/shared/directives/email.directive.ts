import { Directive } from "@angular/core";
import { NG_VALIDATORS, ValidationErrors, Validator, AbstractControl, ValidatorFn } from "@angular/forms";

@Directive({
    selector: '[emailValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        const email = control.value;
        if (email && !EmailValidatorDirective.validateEmail(email)) {
            return { emailValidator: true };
        }

        return null;
    }        

    static validateEmail(email: string): boolean {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        return emailPattern.test(email);
    }
    
}

export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const email = control.value;
        if (email && !EmailValidatorDirective.validateEmail(email)) {
            return { emailValidator: true };
        }
        return null;
    };
}