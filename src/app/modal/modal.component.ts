import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  project={}as Project;
   // This will hold the project title passed from the card

  constructor(public bsModalRef: BsModalRef) {}

  closeModal() {
    this.bsModalRef.hide();
  }
}
