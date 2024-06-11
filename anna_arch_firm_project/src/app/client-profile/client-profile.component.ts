import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Client } from '../client';
import { Address1, Address2, Address3 } from '../address';

@Component({
  selector: 'app-client-profile',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})

export class ClientProfilePageComponent {
  public ClientProfileInstance: ClientProfileComponent = new ClientProfileComponent();
  public ClientAddress1Instance: ClientAddress1Component = new ClientAddress1Component();
  public ClientAddress2Instance: ClientAddress2Component = new ClientAddress2Component();
  public ClientAddress3Instance: ClientAddress3Component = new ClientAddress3Component();
}

export class ClientProfileComponent {

  submitted: boolean = false;

  model: Client;

  constructor() {
this.model = new Client(-1, ``, ``, ``, ``, ``, ``);
  }
 
onSubmit() {
  this.submitted = true;
  console.log(this.model);
}

newClient() {
  this.model = new Client(-1, ``, ``, ``, ``, ``, ``);
  this.submitted = false;
}
}

export class ClientAddress1Component {

  submitted: boolean = false;

  model: Address1;

  constructor() {
this.model = new Address1(-1, ``, ``, ``, ``, ``, ``, -1);
  }
 
onSubmit() {
  this.submitted = true;
  console.log(this.model);
}

newAddress1() {
  this.model = new Address1(-1, ``, ``, ``, ``, ``, ``, -1);
  this.submitted = false;
}

}

export class ClientAddress2Component {

  submitted: boolean = false;

  model: Address2;

  constructor() {
this.model = new Address2(-1, ``, ``, ``, ``, ``, ``, -1);
  }
 
onSubmit() {
  this.submitted = true;
  console.log(this.model);
}

newAddress2() {
  this.model = new Address2(-1, ``, ``, ``, ``, ``, ``, -1);
  this.submitted = false;
}

}

export class ClientAddress3Component {

  submitted: boolean = false;

  model: Address3;

  constructor() {
this.model = new Address3(-1, ``, ``, ``, ``, ``, ``, -1);
  }
 
onSubmit() {
  this.submitted = true;
  console.log(this.model);
}

newAddress3() {
  this.model = new Address3(-1, ``, ``, ``, ``, ``, ``, -1);
  this.submitted = false;
}

}