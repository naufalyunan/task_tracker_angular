import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(item: Task) {
    this.taskService.deleteTask(item).subscribe(() => {
      this.tasks = this.tasks.filter((el) => el.id != item.id)
    })
  }

  toggleReminder(item: Task) {
    this.taskService.toggleReminderTask(item).subscribe((task) => {
      this.tasks.forEach(el => {
        if(el.id == task.id) {
          el.reminder = task.reminder
        }
      })
    })
  }
}
