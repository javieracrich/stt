import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolBusModel, SchoolBusService, WithSubsComponent } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-school-bus-detail',
  templateUrl: './school-bus-detail.component.html',
  styleUrls: ['./school-bus-detail.component.scss']
})
export class SchoolBusDetailComponent extends WithSubsComponent implements OnInit, OnDestroy {
  constructor(private schoolService: SchoolBusService, private route: ActivatedRoute) {
    super();
  }

  schoolBusCode: string;
  schoolBus: SchoolBusModel;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.schoolBusCode = params.id;
      this.subs.push(
        this.schoolService.get<SchoolBusModel>(this.schoolBusCode).subscribe(schoolBus => {
          this.schoolBus = schoolBus;
        })
      );
    });
  }
}
