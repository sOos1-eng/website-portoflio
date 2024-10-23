import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project:Project []=
  [
    {id:0,name:"sample python project",pictures:['../../assets/img/photo.jpg','../../assets/img/counter 3.png','../../assets/img/Untitled-1.jpg'],projectlink:"http://localhost",summary:"python project that countring the numbering of years",description:"here you are working in your first project",tags:[Tag.python,Tag.HTML]},
    {id:1,name:"sample Angular App",pictures:[],projectlink:"http://localhost",summary:"This project using angular framework and it display with standalone  ",description:"here you are working in your first project",tags:[Tag.Typescript,Tag.Bootstrap]},
    {id:2,name:"landingpage",pictures:[],projectlink:"http://localhost",summary:"This project i have worked with Html and css and bootstrap",description:"here you are working in your first project",tags:[Tag.HTML,Tag.CSS]},
    {id:3,name:"simple calculator",pictures:[],projectlink:"http://localhost",summary:"This project have the sample style but i worked with Html,css,js to complete it",description:"here you are working in your first project",tags:[Tag.HTML,Tag.javascript,Tag.CSS]},
    {id:4,name:"loging page",pictures:[],projectlink:"http://localhost",summary:"This project i have worked with Html and css and bootstrap",description:"here you are working in your first project",tags:[Tag.javascript,Tag.HTML]},
    {id:5,name:"landing page",pictures:[],projectlink:"http://localhost",summary:"This project i have worked with Html and css and bootstrap",description:"here you are working in your first project",tags:[Tag.HTML,Tag.CSS]},
  ]

  constructor() { }

  getprojects(){
    return this.project;
  }
  getprojectById(Id:number):Project {
    let project = this.project.find(project=>project.id ===Id);

    if (project === undefined){
      throw new TypeError("there is no project that matches the id: " +Id)

    }
    return project;
  }
}
