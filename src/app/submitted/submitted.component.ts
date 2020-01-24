import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { TD } from '../td-form/td/td.model';
import { RForm } from '../r-form/r-form.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {
  Tdata: TD[];
  Rdata: RForm[];
  index: number
  constructor(private transfer: TransferService) { }

  ngOnInit() {
 
      this.Tdata = this.transfer.getTdForms()
      this.Rdata = this.transfer.getRForms()
    }
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.Rdata, event.previousIndex, event.currentIndex);
    }

}
