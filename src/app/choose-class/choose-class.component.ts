import { Component, OnInit } from '@angular/core';
import { Class } from './../class.model';
import { Router } from '@angular/router';
import { ClassService } from '../class.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-choose-class',
  templateUrl: './choose-class.component.html',
  styleUrls: ['./choose-class.component.css'],
  providers: [ClassService]
})
export class ChooseClassComponent implements OnInit {

  constructor(private router: Router, private classService: ClassService) { }

  classes: FirebaseListObservable<any[]>;
  students: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  ngOnInit() {
    this.classes = this.classService.getClasses();
    this.students = this.classService.getStudents();
  }

  goToThisClassesCharts(clickedClass) {
    this.router.navigate(['class', clickedClass.$key]);
  }

}
