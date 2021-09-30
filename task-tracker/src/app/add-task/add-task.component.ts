import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription,  } from 'rxjs';
import { UiService } from '../services/ui.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean 
  subscription: Subscription
  
  @Output() onAddTask = new EventEmitter()
  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  clearForm() {
    this.text='',
    this.day = '',
    this.reminder = false
  }

  onSubmit() {
    if(!this.text) {
      alert('Please make task')
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    
    this.clearForm()
    this.onAddTask.emit(newTask)
  }

}
