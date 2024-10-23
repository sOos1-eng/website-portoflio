import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { ProjectService } from '../service/project.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  featuredproject={} as Project;
constructor(private titleservice:Title,private projectservice:ProjectService){
  this.titleservice.setTitle("ahmed fahim-home");
}
  ngOnInit(): void {
this.featuredproject = this.projectservice.getprojectById(0);
}
}
