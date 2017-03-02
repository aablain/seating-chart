import { Injectable } from '@angular/core';
import { Class } from './class.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ClassService {
  classes: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.classes = angularFire.database.list('classes');
  }

  getClasses() {
    return this.classes;
  }

  
}
