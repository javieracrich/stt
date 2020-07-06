import { Component, OnInit } from '@angular/core';
import { CardService, WithSubsComponent, SchoolService, AlertService } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class SttCardsComponent extends WithSubsComponent implements OnInit {
  constructor(private cardService: CardService,
     private schoolService: SchoolService,
     private alertService: AlertService) {
    super();
  }

  attachedCardsCount = -1;
  assistance = -1;
  alerts = -1;

  ngOnInit() {
    this.subs.push(this.cardService.countAttached().subscribe(count => (this.attachedCardsCount = count)));
    this.subs.push(this.schoolService.getAssistance().subscribe(assitance => (this.assistance = assitance)));
    this.subs.push(this.alertService.count().subscribe(count => (this.alerts = count)));
  }
}
