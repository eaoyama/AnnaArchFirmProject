import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Address1, Address2, Address3 } from '../address';

@Component({
  selector: 'app-client-address',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './client-address.component.html',
  styleUrls: ['./client-address.component.css']  
})

export class ClientAddressComponent {
  public ClientAddress1Instance: ClientAddress1Component = new ClientAddress1Component();
  public ClientAddress2Instance: ClientAddress2Component = new ClientAddress2Component();
  public ClientAddress3Instance: ClientAddress3Component = new ClientAddress3Component();
}

// Base class for address components
class BaseAddressComponent<T> {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
    'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 
    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  submitted = false;
  model: T;

  constructor(model: T) {
    this.model = model;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  newAddress(model: T) {
    this.model = model;
    this.submitted = false;
  }
}

export class ClientAddress1Component extends BaseAddressComponent<Address1> {

  constructor() {
    super(new Address1(-1, ``, ``, ``, ``, ``, ``, -1));
  }

  newAddress1() {
    this.newAddress(new Address1(-1, ``, ``, ``, ``, ``, ``, -1));
  }
}

export class ClientAddress2Component extends BaseAddressComponent<Address2> {
  constructor() {
    super(new Address2(-1, ``, ``, ``, ``, ``, ``, -1));
  }

  newAddress2() {
    this.newAddress(new Address2(-1, ``, ``, ``, ``, ``, ``, -1));
  }
}

export class ClientAddress3Component extends BaseAddressComponent<Address3> {
  constructor() {
    super(new Address3(-1, ``, ``, ``, ``, ``, ``, -1));
  }

  newAddress3() {
    this.newAddress(new Address3(-1, ``, ``, ``, ``, ``, ``, -1));
  }
}
