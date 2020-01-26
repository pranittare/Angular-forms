import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { TransferService } from '../transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {
  minDate = new Date(1970, 0, 1);
  maxDate = new Date(2005, 0, 15);
  registerForm: FormGroup;
  public submit = true;
  constructor(private transfer: TransferService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'firstname': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lastname': new FormControl(null, Validators.required),
      'birth': new FormControl(null, [Validators.required]),
      'task': new FormArray([], Validators.required)
    });
  }

  onAddTask() {
    const controls = new FormControl(null, (Validators.required));
    (<FormArray>this.registerForm.get('task')).push(controls)
  }
  onSubmit(){
    this.transfer.rForms(this.registerForm.value)
    this.router.navigate(['/submitted']);
    this.registerForm.reset();

  }
}
