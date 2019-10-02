import { Component, OnInit } from '@angular/core';
import { MarksService } from './marks.service';
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

marks:Array<number>;
  constructor(private marksService: MarksService) { }

  ngOnInit() {
     /* this.marks=this.marksService.getMarks().subscribe((x)=>{
        console.log(x);
    }) */
  }

}