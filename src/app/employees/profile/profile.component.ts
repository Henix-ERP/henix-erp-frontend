import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  items = [
    {value: 'Option 1'},
    {value: 'Option 2'},
    {value: 'Option 3'},
    {value: 'Option 4'},
    {value: 'Option 5'},
    {value: 'Option 6'},
    {value: 'Option 7'},
  ]
}
