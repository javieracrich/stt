import { Component, Input } from '@angular/core';
import { UserModel, PushType } from '@stt-nx-workspace/stt-common';

@Component({
  selector: 'stt-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  @Input() data: UserModel[] = null;
  displayedColumns = ['firstName', 'lastName', 'lastStatus', 'lastStatusDateTime'];

  getStatus(lastStatusId: number) {
    switch (lastStatusId) {
      case PushType.ENTERING_SCHOOL: {
        return 'Entering School';
      }
      case PushType.LEAVING_SCHOOL: {
        return 'Leaving School';
      }
      default:
        return '[ unknown ]';
    }
  }
}
