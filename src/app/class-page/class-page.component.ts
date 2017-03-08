import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Class } from './../class.model';
import { ClassService } from '../class.service';
import { FirebaseObjectObservable } from 'angularfire2';
declare var $:any;


@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css'],
  providers: [ClassService]
})
export class ClassPageComponent implements OnInit {

  classId: string;
  classToDisplay: FirebaseObjectObservable<Class>;
  classToCall: FirebaseObjectObservable<Class>;
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

    for (var i=1; i<10; i++) {
      $(".classPageBox__seatingChartBox__seatingChart").append('<div class="classPageBox__seatingChartBox__seatingChart__row" id="' + i + '"></div>');
      for (var j=1; j<10; j++) {
        $(".classPageBox__seatingChartBox__seatingChart__row:last-of-type").append('<div class="classPageBox__seatingChartBox__seatingChart__row__seatSpot' + ' r' + i + 'c' + j + '"></div>');
      }
    };
  }

  showThatChartList() {
    $(".notShown").addClass("showing");
    $(".notShown").removeClass("notShown");
    $(".coverBox").addClass("displaysCoverBox");
  }

  hideTheSidebarPlease() {
    console.log(this);
    if ($(".classPageBox__sidebar").hasClass("showing") === true) {
      $(".showing").addClass("notShown");
      $(".showing").removeClass("showing");
      $(".coverBox").removeClass("displaysCoverBox");
    }
  }

  showTheNavbar() {
    if ($(".classPageBox__navbox").hasClass("navhidden") === true) {
      $(".navhidden").addClass("navshown");
      $(".navhidden").removeClass("navhidden");
    } else if ($(".classPageBox__navbox").hasClass("navshown") === true) {
      $(".navshown").addClass("navhidden");
      $(".navshown").removeClass("navshown");
    }
  }

  showThisChart(chartClicked) {
    console.log(chartClicked.students.length);
    console.log();
    // for (var x; x<chartClicked.students.length; x++) {
    //   var currentPlace;
    //   var currentOrder;
    // }
  }

}
