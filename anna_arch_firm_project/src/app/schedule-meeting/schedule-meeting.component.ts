import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-schedule-meeting',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './schedule-meeting.component.html',
  styleUrl: './schedule-meeting.component.css'
})
export class ScheduleMeetingComponent {
  submitted: boolean = false;

  model: Meeting;

  constructor () {
    this.model = new Meeting(-1, new Date, new Date, new Date, ``, ``, ``, -1);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
  
  newMeeting() {
    this.model = new Meeting(-1, new Date, new Date, new Date, ``, ``, ``, -1);
    this.submitted = false;
  }
  
}
