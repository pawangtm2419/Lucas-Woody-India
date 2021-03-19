import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DataModel } from './data.model';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*log in */
  loginuser: DataModel = new DataModel();
  loginForm: FormGroup;
  hide = true;

  /* registration */
  reguser: DataModel = new DataModel();
  registerForm: FormGroup;
  datas: [];
  error: '';

  constructor(private formBuilder: FormBuilder, private service: AppService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobile: [this.loginuser.mobile, [ Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: [this.loginuser.password, [ Validators.required, Validators.minLength(6), Validators.maxLength(30) ]]
    });

    this.registerForm = this.formBuilder.group({
      name: [this.reguser.name, [ Validators.required, Validators.minLength(4), Validators.maxLength(50) ]],
      mobilenumber: [this.reguser.mobilenumber, [ Validators.required, Validators.minLength(10), Validators.maxLength(10) ]],
      email: [this.reguser.email],
      password: [this.reguser.password, [ Validators.required, Validators.minLength(6), Validators.maxLength(30) ]],
      cpassword: [this.reguser.cpassword, [ Validators.required]],
      streatname: [this.reguser.streatname, [Validators.required]],
      address1: [this.reguser.address1, [Validators.required]],
      address2: [this.reguser.address2, [Validators.required]],
      nearby: [this.reguser.nearby, [Validators.required]],
      pincode: [this.reguser.pincode, [Validators.required]]
    });
  }

  onLoginSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const userName = this.loginuser.mobile;
    const passWord = this.loginuser.password;

    this.service.getUserDetail(userName, passWord).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/']);
        /* this.service.setLoggedIn(true); */
        localStorage.setItem('username', JSON.stringify(userName).replace(/\"/g, ''));
      } else {
        window.alert(data.serect);
      }
    });
  }
  onRegisterSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const uName = this.reguser.name;
    const uMobileNo = this.reguser.mobilenumber;
    const uMail = this.reguser.email;
    const passWORD = this.reguser.password;
    const cpassWord = this.reguser.cpassword;
    const sTreatName = this.reguser.streatname;
    const addRess1 = this.reguser.address1;
    const addRess2 = this.reguser.address2;
    const nearBy = this.reguser.nearby;
    const pincOde = this.reguser.pincode;

    if (passWORD === cpassWord) {
      this.service.getRegisterDetail(uName, uMobileNo, uMail, passWORD, sTreatName, addRess1, addRess2, nearBy, pincOde).subscribe(data => {
        if (data.success) {
          window.alert(data.serect);
          this.reguser = new DataModel();
        } else {
          window.alert(data.serect);
        }
      });
    } else {
      window.alert('Password does not match!');
    }
  }
}
