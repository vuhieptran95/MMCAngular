import { StudentService } from './../services/student.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private Location: Location, private studentService: StudentService) { }
  @Input() student: any;
  @Output() change = new EventEmitter();
  // onSave(student){
  //   this.change.emit(student);
  // }

  submit(f, student){
    console.log(f);
    console.log(student);
    
  }

  log(model){
    console.log(model);
  }

  ngOnInit() {
    // let id;
    // this.route.params.subscribe((params: ParamMap)=>id=params['id']);
    // this.studentService.getStudent(id).subscribe(student=>this.student = student.json());
  }

}
