import { UtilService } from './../services/util.service';
import { Component, OnInit } from '@angular/core';
import { StudentService } from "../services/student.service";
import { Http } from "@angular/http";

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService, private util: UtilService) { }
  selectedStudent: any;
  detailedStudent: any;
  students: any[];
  grades: any[];
  id = 1;
  onSelectStudent(student){
    if(this.selectedStudent==null || this.selectedStudent!= student){
      this.selectedStudent = student;
    }
    else if(this.selectedStudent==student){
      this.selectedStudent=null;
    }
  }

  onSelectStudent2(student){
    this.studentService.getStudentGrades(student.id).subscribe(grades=>this.grades = grades.json());
  }

  onSelectDetailedStudent(student){
    this.detailedStudent = student;
  }

  onClose(){
    this.selectedStudent = null;
    this.grades = null;
  }

  onChangeStudentDetail(student){
    console.log(student);
  }
  
  ngOnInit() {
    this.studentService.getStudents().subscribe(students=>this.students = students.json());
  }

}
