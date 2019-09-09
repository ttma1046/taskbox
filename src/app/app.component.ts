import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  };

  onPinTask(taskId: any) {
    console.log(taskId);
  }

  onArchiveTask(taskId: any) {
    console.log(taskId);
  }
}
