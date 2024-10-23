import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardProjectComponent } from "../card-project/card-project.component";
import { Project } from '../models/project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-portflio',
  standalone: true,
  imports: [CardProjectComponent,CommonModule],
  templateUrl: './portflio.component.html',
  styleUrl: './portflio.component.css'
})
export class PortflioComponent implements OnInit {
 projects={}as Project[];

constructor(private titleservice:Title,private projectservice:ProjectService){
  this.titleservice.setTitle("ahmed fahim portflio")
}
ngOnInit(): void {
this.projects=this.projectservice.getprojects();
}

}
