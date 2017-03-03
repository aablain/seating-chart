import { Injectable } from '@angular/core';
import { Class } from './class.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ClassService {
  classes: FirebaseListObservable<any[]>;
  students: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.classes = angularFire.database.list('classes');
    this.students = angularFire.database.list('classes/students');
  }

  getClasses() {
    return this.classes;
  }

  getStudents() {
    return this.students;
  }

}
