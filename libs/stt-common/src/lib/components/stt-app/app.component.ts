import { Component, OnInit } from '@angular/core';
import { WithSubsComponent } from '../subscriptions.component';
import { ToastService } from '../../services';

@Component({
  selector: 'stt-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class SttAppComponent extends WithSubsComponent implements OnInit {
  message: any;

  constructor(private toastService: ToastService) {
    super();
  }

  ngOnInit() {
    this.subs.push(
      this.toastService.getMessage().subscribe(message => {
        this.message = message;
      })
    );
  }

  removeMessage() {
    this.message = null;
  }
}
