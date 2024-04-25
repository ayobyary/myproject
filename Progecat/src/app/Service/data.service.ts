import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Person} from "../Model/Person";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('assets/data.json');
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>('assets/data.json', person);
  }

  editPerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`assets/data.json/${person.id}`, person);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`assets/data.json/${id}`);
  }
}
