import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'stt-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  constructor() {}
  @Input() public count: Observable<string>;
  @Input() public title: string;
  @Input() public color: string;
  @Input() public icon: string;

  public borderColor: string;
  public textColor: string;
  ngOnInit() {
    switch (this.color) {
      case 'warning': {
        this.borderColor = 'border-warning';
        this.textColor = 'text-warning';
        break;
      }
      case 'info': {
        this.borderColor = 'border-info';
        this.textColor = 'text-info';
        break;
      }
      case 'success': {
        this.borderColor = 'border-success';
        this.textColor = 'text-success';
        break;
      }
    }
  }
}
