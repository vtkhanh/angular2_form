import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {
  user: User = {
    name: 'Khanh Vu',
    account: {
      email: 'vtkhanh90@gmail.com',
      confirm: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}
