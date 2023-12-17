import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule,MatButtonModule,MatIconModule,MatToolbarModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css','./menu-bar.responsible.css'],
})
export class MenuBarComponent {

}
