import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Class } from './../class.model';
import { ClassService } from '../class.service';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css'],
  providers: [ClassService]
})
export class ClassPageComponent implements OnInit {

  classId: string;
  classToDisplay: FirebaseObjectObservable<Class>;
  @Input() selectedClass;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private classService: ClassService
  ) { }


  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.classId = urlParametersArray['id'];
    });
    this.classToDisplay = this.classService.getClassById(this.classId);
  }

}
