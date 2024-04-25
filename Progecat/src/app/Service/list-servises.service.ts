import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, switchMap, throwError} from "rxjs";
import {listme} from "../Model/listme";


@Injectable({
  providedIn: 'root'
})
export class ListServisesService {
  private shabion!: listme[];

  constructor(private http:HttpClient) { }
  getLIST():Observable<listme[]>{
    return this.http.get<listme[]>('assets/ListMeJson.json')
  }
  // add(newItem: listme): Observable<listme[]> {
  //   return this.getLIST().pipe(
  //     switchMap(items => {
  //       if (!Array.isArray(items)) {
  //         return throwError('Unexpected response from getList: not an array');
  //       }
  //
  //       items.push(newItem);
  //
  //       return this.http.post<listme[]>('assets/ListMeJson.json', newItem);
  //     })
  //   );
  // }

  add(newItem: listme): Observable<listme[]> {
    return this.getLIST().pipe(
      switchMap(items => {
        if (!Array.isArray(items)) {
          return throwError('Unexpected response from getList: not an array');
        }
        this.shabion.push(newItem); // Update shabion array directly
        return of(items); // Return existing list (optional)
      })
    );
  }



}
