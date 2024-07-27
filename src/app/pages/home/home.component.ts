import { Component } from '@angular/core';
import { CarousalComponent } from '../../units/carousal/carousal.component';
import { CardsComponent } from '../../units/cards/cards.component';
import { AccordionComponent } from '../../units/accordion/accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarousalComponent,CardsComponent,AccordionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
