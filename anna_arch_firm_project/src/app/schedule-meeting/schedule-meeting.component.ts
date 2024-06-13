import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  //property
  submitted: boolean = false;

  model: Meeting;

 //method that runs immediately upon creation of an object (new Meeting)
  constructor () {
    this.model = new Meeting(-1, new Date, new Date, new Date, ``, ``, ``, -1);
  }
  
  //nameOfMethod()   ...sometimes method has parameters onSubmi (clientForm: NgForm)
  //console.log(someString: String)
  //some methods are VOID. others have a RETURN type.
  onSubmit(meeting: NgForm) {
    this.submitted = true;
    console.log(this.model);
  }
  
  newMeeting(meeting: NgForm) {
    meeting.resetForm();  // Reset the form using ngForm directive method

    this.model = new Meeting(-1, new Date, new Date, new Date, ``, ``, ``, -1);
    this.submitted = false;
  }
  
}
