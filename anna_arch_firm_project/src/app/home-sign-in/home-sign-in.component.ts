import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-sign-in',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home-sign-in.component.html',
  styleUrl: './home-sign-in.component.css'
})
export class HomeSignInComponent {


}

