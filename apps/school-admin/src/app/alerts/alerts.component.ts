import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  ToastService,
  UserCategory,
  AlertType,
  AlertService,
  WithSubsComponent,
  AlertModel,
  PostAlertRequest,
} from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent extends WithSubsComponent implements OnInit {
  constructor(private toast: ToastService, private alertService: AlertService) {
    super();
  }

  alerts: AlertModel[] = [];
  selectedAlertId: number;
  alertType = new FormControl('', [Validators.required]);
  who: number[];
  message: string;
  categories: { id: number; name: string }[] = [];
  alertTypes: { id: number; name: string }[] = [];
  sendAlertButtonText = 'SEND ALERT';
  sendAlertDisabled = false;

  ngOnInit() {
    this.initCategories();
    this.initAlertTypes();
    this.refreshAlerts();
  }

  sendAlert() {
    const alert: PostAlertRequest = {
      userCategories: this.who,
      alertType: this.selectedAlertId,
      message: this.message
    };
    this.subs.push(
      this.alertService.send(alert).subscribe(x => {
        this.sendAlertButtonText = 'ALERT SENT';
        this.sendAlertDisabled = true;
        this.refreshAlerts();
      })
    );
  }

  refreshAlerts() {
    this.alertService.getAll<AlertModel>().subscribe(alerts => (this.alerts = alerts));
  }

  getCategoryNames(ids: []) {
    const categoryNames: string[] = [];
    ids.forEach(id => {
      categoryNames.push(UserCategory[id]);
    });

    return categoryNames;
  }

  initCategories() {
    for (const n in UserCategory) {
      if (typeof UserCategory[n] === 'number') {
        this.categories.push({ id: <any>UserCategory[n], name: n });
      }
    }
  }
  initAlertTypes() {
    for (const n in AlertType) {
      if (typeof AlertType[n] === 'number') {
        this.alertTypes.push({ id: <any>AlertType[n], name: n });
      }
    }
  }
}
