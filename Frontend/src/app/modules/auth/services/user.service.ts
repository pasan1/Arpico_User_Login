import {Injectable} from '@angular/core';
import UserDTO from "../dto/UserDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public register(dto: UserDTO): Observable<any> {
    return this.http.post(this.baseURL+'user',{
      fName:dto.fName,
      uName:dto.uName,
      email:dto.email,
      mobile:dto.mobile,
      password:dto.password,
      regDate:dto.regDate,
    });
  }

  public login(email: string, password: string): Observable<any>{
    return this.http.get(this.baseURL+'userRoute/searchuser',{
      headers:{email,password}
    })
  }

}
