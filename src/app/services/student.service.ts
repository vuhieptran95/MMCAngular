import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  constructor(private http: Http) {}

  getStudents(){
    return this.http.get('http://localhost:44105/api/test');
  }

  getStudentGrades(id: string){
    return this.http.get('http://localhost:44105/api/test/'+id);
  }

  getStudent(id: string){
    return this.http.get('http://localhost:44105/api/test/getstudent/'+id);
  }

  updateStudent(student: any){

  }

}
