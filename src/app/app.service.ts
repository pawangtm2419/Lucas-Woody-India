import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface LoginData {
  success: boolean;
  serect: string;
}
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUserDetail(userName, passWord) {
    return this.http.post<LoginData>('http://locaswoodyindia.com/api/login.php', {
      userName, passWord
    });
  }

  getRegisterDetail(uName, uMobileNo, uMail, passWORD, sTreatName, addRess1, addRess2, nearBy, pincOde) {
    return this.http.post<LoginData>('http://locaswoodyindia.com/api/registration.php', {
      uName, uMobileNo, uMail, passWORD, sTreatName, addRess1, addRess2, nearBy, pincOde
    });
  }
}
