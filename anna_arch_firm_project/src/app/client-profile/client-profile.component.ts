import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Client } from '../client';
import { ClientAddressComponent } from '../client-address/client-address.component';


@Component({
  selector: 'app-client-profile',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ClientAddressComponent],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})

export class ClientProfileComponent {

  submitted: boolean = false;
  model: Client;

  constructor() {
this.model = new Client(-1, ``, ``, ``, ``, ``, ``);
  }
 
onSubmit(clientProfileInstance: NgForm) {
  this.submitted = true; //kept it, but not necessary as ngSubmit sets to true?
  console.log(this.model);
}

newClient(clientProfileInstance: NgForm) {
  clientProfileInstance.resetForm();  // Reset the form using ngForm directive method

  this.model = new Client(-1, ``, ``, ``, ``, ``, ``);
  this.submitted = false; // Reset submitted flag
}
}