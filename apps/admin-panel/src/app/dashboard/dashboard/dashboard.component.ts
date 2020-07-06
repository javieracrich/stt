import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService, CardService, DashboardNotificationService } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private userService: UserService,
    private cardService: CardService,
    private dashboardNotificationService: DashboardNotificationService
  ) {}

  public userCount: Observable<number>;
  public cardCount: Observable<number>;
  public boundCount: Observable<number>;
  public notifications$: Observable<string[]>;

  ngOnInit() {
    this.userCount = this.userService.count();
    this.cardCount = this.cardService.count();
    this.boundCount = this.cardService.countAttached();
    this.notifications$ = this.dashboardNotificationService.getAll();
  }
}
