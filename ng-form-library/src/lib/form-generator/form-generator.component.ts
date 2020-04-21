import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { configModel } from '../models/input.model';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from '../validators/Validator';
import forms from '../datas/forms.json'
import { NgFormLibraryService } from '../ng-form-library.service';
@Component({
  selector: 'ng-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss', '../style.scss']
})
export class FormGeneratorComponent implements OnInit {
  /**@type {configModel} To validate and check all the input types are properly given by user */
  @Input() config: configModel;
  /** @type {FormGroup} To pass the form values to the parent Component once the form is submitted. */
  @Output() getFormData = new EventEmitter<FormGroup>();
  form: FormGroup;
  isFormSubmitted: boolean = false;
  /**To store the FormName and value for Submit button */
  FormProperties: any = {
    "FormCaption": "",
    "ButtonValue": ""
  };
  constructor(private ngFormLibraryService: NgFormLibraryService) {
  }/**To store the selected form fields from the JSON */
  formFields: any;

  ngOnInit() {
    this.formFields = forms[this.config.formName];
    const formGroup = {};
    var comparevalidation;
    this.formFields = this.formFields.filter(obj => {
      if (obj.key == 'FormProperties') {
        this.FormProperties.FormCaption = obj.FormCaption;
        this.FormProperties.ButtonValue = obj.ButtonValue;
      }
      if (obj.key == 'state' && !this.config.fieldsToExclude.includes(obj.label)) {
        obj.options = [...obj.options, ...this.ngFormLibraryService.getStatesUsingCountryName(this.config.country)]
      }
      return (obj.key != 'FormProperties' && !this.config.fieldsToExclude.includes(obj.label));
    });
    this.formFields.forEach(prop => {
      prop.type == 'checkbox' ? formGroup[prop.key] = new FormArray([], this.mapValidators(prop.validation)) : formGroup[prop.key] = new FormControl(prop.value || '', this.mapValidators(prop.validation))
      if (prop.key == 'confirmPassword') comparevalidation = true;
    })
    comparevalidation == true ? this.form = new FormGroup(formGroup, CustomValidators.comparePasswords) : this.form = new FormGroup(formGroup);
  }

  /**
   * Adds the validation to the individual formControls based on the Validation Provided.
   * @param validators Array with the validations added for the form field
   */
  private mapValidators(validators) {
    const formValidators = [];
    if (validators) {
      for (const vals of validators) {
        vals.type == "static" ? formValidators.push(Validators[vals.validatiors]) : vals.type == "staticmethod" ? vals.validatiors.forEach(validator => {
          formValidators.push(Validators[validator.methodName](validator.methodValue))
        }) : formValidators.push(CustomValidators[vals.validatiors])
      }
    }
    return formValidators;
  }

  /**Gets the form value */
  formvalue() {
    this.isFormSubmitted = true;
    if (this.form.valid) {
      this.getFormData.emit(this.form);
    }
  }

  /**
   * Monitors the changes in the checkbox.
   * @param e  Event that captured checkbox change
   * @param checkbox FormcontrolName of the field
   * @param type Type of the control either formControl or formArray
   */
  onCheckboxChange(e, checkbox, type) {
    if (type == 'formControl') {
      e.target.checked == true ? this.form.controls[checkbox].setValue(true) : this.form.controls[checkbox].setValue(false);
    } else {
      const checkArray: FormArray = this.form.get(checkbox) as FormArray;
      if (e.target.checked) {
        checkArray.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        checkArray.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      }
    }
  }
}
