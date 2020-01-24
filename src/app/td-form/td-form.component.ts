import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransferService } from '../transfer.service';
import { TD } from './td/td.model';
import { Router } from '@angular/router';

export interface State {
  value: string;
}

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit{
 
  @ViewChild('f', {static: false}) form: NgForm

  states: State[] = [
    {value: 'Maharashtra'},
    {value: 'Goa'},
    {value: 'Bangalore'},
  ];
  constructor(private transfer:TransferService, private router: Router) { }

  ngOnInit() {
  }
 
 
  
  onSubmit(form: NgForm){
    const fullName = form.value.fullname
    const add1 = form.value.add1
    const add2 = form.value.add2
    const zip = form.value.zip
    const state = form.value.state
    const tddata = new TD(fullName,add1,add2,zip,state)
    this.transfer.tdForms(tddata);
    alert("Just One More Form")
    this.router.navigate(['/reactive']);

    this.form.reset()
  }

}
