import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculateDividersService {
  private URL: string = 'https://localhost:44335/api/Course/';
  constructor(private http: HttpClient) { }

  calculate(obj){
    console.log(obj);
    return this.http.post(this.URL, obj);
  }

  Register(course){
    return this.http.post(this.URL, course);
  }

  GetAll(){
    return this.http.get(this.URL);
  }

  GetById(){
    var id = "363ba979-578b-418f-2d66-08d8ed80bb6b";
    return this.http.get(this.URL + "GetById?courseId=" + id);
  }

}
