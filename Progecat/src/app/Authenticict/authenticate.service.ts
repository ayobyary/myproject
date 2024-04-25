import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
serviceUrl:string= "https://apitester.ir/api/Users/authenticate";

  constructor(private http:HttpClient) { }

    login(data:any):Observable<any>{
      const params=new URLSearchParams();
      params.set('userName',data.username);
      params.set('password',data.password);
      const apiurl = `${this.serviceUrl}?${params.toString()}`;

      return this.http.post<any>(apiurl,data).pipe(
        catchError(err => {
          console.error('Error authenticating user:', err);
          return throwError(err); // Re-throw the error for handling in the component
        })
      );
    }
//   login(model)Observable<any>{
//     return this.http.post(this.serviceUrl,model);

// }
}
