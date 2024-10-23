import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortflioComponent } from './portflio/portflio.component';

import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'portflio',component:PortflioComponent},
  {path:'contact',component:ContactComponent},
  {path:'skills',component:SkillsComponent},
];


