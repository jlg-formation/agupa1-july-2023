import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  faPlus = faPlus;
  f = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    price: new FormControl(0, [Validators.required]),
    qty: new FormControl(0, [Validators.required]),
  });
}
