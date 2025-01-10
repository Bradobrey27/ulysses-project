import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-episode-13',
  standalone: true,
  imports: [TooltipModule, HeaderComponent, FooterComponent],
  templateUrl: './episode-13.component.html',
  styleUrl: './episode-13.component.scss'
})
export class Episode13Component {

}
