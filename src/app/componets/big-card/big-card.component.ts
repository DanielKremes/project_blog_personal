import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card-resposible.css'],
})
export class BigCardComponent {

  @Input()
  image: string = '';

  @Input()
  article: string = '';

  @Input()
  description: string = '';


}
