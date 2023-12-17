import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../componets/menu-title/menu-title.component";
import { MenuBarComponent } from "../../componets/menu-bar/menu-bar.component";
import { BigCardComponent } from "../../componets/big-card/big-card.component";
import { SmallCardComponent } from "../../componets/small-card/small-card.component";
import { FooterComponent } from "../../componets/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css','./home.responsible.css'],
    imports: [MenuTitleComponent, MenuBarComponent, BigCardComponent, SmallCardComponent, FooterComponent]
})
export class HomeComponent {

}
