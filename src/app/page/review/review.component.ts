import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataModel } from 'src/app/login/data.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reguser: DataModel = new DataModel();
  enquiryForm: FormGroup;
  datas: [];
  error: '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.enquiryForm = this.formBuilder.group({
      name: [this.reguser.name, [ Validators.required, Validators.minLength(4), Validators.maxLength(50) ]],
      mobilenumber: [this.reguser.mobilenumber, [ Validators.required, Validators.minLength(10), Validators.maxLength(10) ]],
      email: [this.reguser.email, [ Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      enq: [this.reguser.enq, [Validators.required, Validators.minLength(10)]]
    });
  }

  onEnquirySubmit($event) {
    /* bcksjn */
  }

}
