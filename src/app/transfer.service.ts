import { Injectable } from '@angular/core';

import { TD } from './td-form/td/td.model';
import { RForm } from './r-form/r-form.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private tdForm: TD[] = []
  private rForm: RForm[] = []


  constructor() { 
    
  }
  tdForms(text: TD){
    this.tdForm.push(text)
 
  }
  getTdForms() {
    
    return this.tdForm.slice()

  }
  
  rForms(text: RForm){
    this.rForm.push(text);
  }
  getRForms() {
    return this.rForm.slice();
  }
}
