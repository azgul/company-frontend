import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }            from '@angular/router';

import { Company }           from './company';
import { CompanyService }    from './company.service';


@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html'
})

export class CompanyCreateComponent {
  companyForm: FormGroup;
  company = new Company();
  formErrors = {
    'cvr': '',
    'name': '',
    'address': '',
    'city': '',
    'country': ''
  };

  validationMessages = {
    'cvr': {
      'required':      'CVR is required.'
    },
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 3 characters long.',
      'maxlength':     'Name cannot be more than 40 characters long.'
    },
    'address': {
      'required':      'Address is required.'
    },
    'city': {
      'required':      'City is required.'
    },
    'country': {
      'required':      'Country is required.'
    }
  };

  constructor(
    private service: CompanyService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    this.create();
  }

  create(): void {
    this.service.create(this.company)
      .then(company => this.gotoDetail(company));
  }

  gotoDetail(company: Company): void {
    this.router.navigate(['/detail', company.id]);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.companyForm = this.fb.group({
        'cvr': [this.company.cvr, [ Validators.required ]],
        'name': [this.company.name, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(40)
          ]
        ],
        'address': [this.company.address, [Validators.required ]],
        'city': [this.company.city, [Validators.required ]],
        'country': [this.company.country, [Validators.required ]],
        'phone': [this.company.phone, [ ]]
    });

    this.companyForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if (!this.companyForm) { return; }
    const form = this.companyForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}
