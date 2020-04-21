// reactive form custom validation: https://alligator.io/angular/reactive-forms-custom-validator/

import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static validateZipCodeInd(control: AbstractControl) {
    const zipCodePattern = new RegExp(/^\d{6}$/)
    if (!zipCodePattern.test(control.value)) {
      return { IsHavingErr: true, errormessage: 'Invalid Zipcode' };
    }
    return null;
  }

  // static class ValidationUtil {


  //checks whether email matches with email regex pattern
  static validateEmail(control: AbstractControl) {
    let emailRegexPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!emailRegexPattern.test(control.value)) {
      return { IsHavingErr: true, errormessage: 'Invalid Email ID' };
    }
    return null;

  }

  //checks whether mobile matches with mobile regex pattern
  static validateMobileUs(control: AbstractControl) {
    let mobileRegexPattern = new RegExp(/^(\+?\d{1,3}[- ]?)?\d{10}$/);
    if (!mobileRegexPattern.test(control.value)) {
      return { IsHavingErr: true, errormessage: 'Invalid Phone Number' };
    }
    return null;
  }

  //checks whether mobile matches with mobile regex pattern
  static validateMobileInd(control: AbstractControl) {
    let mobileRegexPattern = new RegExp(/^\d{10}$/);
    if (!mobileRegexPattern.test(control.value)) {
      return { IsHavingErr: true, errormessage: 'Invalid Phone Number' };
    }
    return null;
  }

  //checks whether password matches with confirm password
  static comparePasswords(control: AbstractControl) {
    let password = control.get('password').value; // to get value in input tag
    let confirmPassword = control.get('confirmPassword').value; // to get value in input tag
    if (password != confirmPassword) {
      control.get('confirmPassword').setErrors({ IsHavingErr: true, errormessage: 'Password Mismatches' })
    } else {
      return null
    }
  }


  // //check password with Regex pattern
  // static validatePasswordPattern(Ac: AbstractControl) {
  //   let passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,100})/);
  //   return observableOf(passwordPattern.test(Ac.value)).pipe(
  //     map(result => result ? null : { checkPasswordPattern: true })
  //   );
  // }

  //check password with Regex pattern
  static validatePasswordPattern(control: AbstractControl) {
    let passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#*])[A-Za-z\d@$!#*]{8,}$/);
    if (!passwordPattern.test(control.value)) {
      return { IsHavingErr: true, errormessage: 'Password does not match criteria' };
    }
    return null;
  }
  //check FirstName and LastName
  static validateNamePattern(control: AbstractControl) {
    let nameRegexPattern = new RegExp(/^[a-zA-Z]+(\s{0,1}[a-zA-Z])*$/);
    if (!nameRegexPattern.test(control.value)) {
      return { IsHavingErr: true, errormessage: 'Should be Maximun 6 character without space' };
    }
    return null;
  }

  //validate Zipcode USA pattern
  static validateZipcodeUs(control: AbstractControl) {
    let zipcodePattern = new RegExp(/(^\d{5,6}$)|(^\d{5}-\d{4}$)/);
    if (!zipcodePattern.test(control.value)) {
      return { IsHavingErr: true, errormessage: 'Invalid Zip Code' };
    }
    return null;
  }

  //Validate Website Pattern
  static validateWebsitePattern(control: AbstractControl) {
    let websitePattern = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
    if (!websitePattern.test(control.value)) {
      return { IsHavingErr: true, errormessage: 'Invalid Zipcode' };
    }
    return null;
  }
}



// }

