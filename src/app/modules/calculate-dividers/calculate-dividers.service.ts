import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculateDividersService {
  private URL: string = 'https://localhost:44393/api/Divider'
  constructor(private http: HttpClient) { }

  calculate(obj){
    console.log(obj);
    return this.http.post(this.URL, obj);
  }
}
