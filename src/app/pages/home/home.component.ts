import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../componets/menu-title/menu-title.component";
import { MenuBarComponent } from "../../componets/menu-bar/menu-bar.component";
import { BigCardComponent } from "../../componets/big-card/big-card.component";
import { SmallCardComponent } from "../../componets/small-card/small-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTitleComponent, MenuBarComponent, BigCardComponent, SmallCardComponent]
})
export class HomeComponent {

}
