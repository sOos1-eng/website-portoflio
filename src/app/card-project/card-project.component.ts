import { Component, Input} from '@angular/core';
import { Project } from '../models/project';
import { CommonModule } from '@angular/common';
import {  BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule,ModalModule,ModalComponent],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
@Input() project = {} as Project;

}
