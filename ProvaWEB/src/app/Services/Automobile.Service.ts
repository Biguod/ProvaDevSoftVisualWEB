import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Automobile from "../Models/Automobile";

@Injectable({
  providedIn: "root",
})
export class AutomobileService {
  private url = "https://localhost:5001/api/automobile";

  constructor(private httpClient: HttpClient) {}

  createAutomobile(automobile: Automobile): Observable<Automobile> {
    return this.httpClient.post<Automobile>(`${this.url}/create`, automobile);
  }

  listAutomobiles(): Observable<Automobile[]> {
      return this.httpClient.get<Automobile[]>(`${this.url}/list`);
  }

}