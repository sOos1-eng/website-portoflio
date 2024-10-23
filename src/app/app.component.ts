import { Component } from '@angular/core';
import { HeaderComponent } from "./component/header/header.component";
import { NavComponent } from './component/nav/nav.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbAccordionModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { FooterComponent } from "./component/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavComponent, RouterModule, RouterLink, RouterOutlet, RouterLinkActive, ModalModule, NgbAccordionModule, FormsModule, ModalComponent, CardProjectComponent, NgbCarouselModule, ModalComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website-portfolio';
}

