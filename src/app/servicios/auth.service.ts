import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  end_point:string = environment.API_URL;

  private static token:string;
  static changeToken(token){
    this.token = token;
    console.log('change :', this.token)
  }

  static getToken(){
    console.log('getToken :', this.token)
    return this.token;
  }

  static deleteToken(){
    this.token = null;
  }
  public login(email,password){
    // let params =
    let headers= new HttpHeaders({'content-type':' application/json','X-Requested-With':'XMLHttpRequest'})
    return this.http.post(`${this.end_point}/auth/login`,{email,password},{headers});
  }

  public register(name,email,password,birthday){
    let headers= new HttpHeaders({'content-type':' application/json','X-Requested-With':'XMLHttpRequest'})
    return this.http.post(`${this.end_point}/auth/signup`,{name,email,password,birthday},{headers});    
  }
}
