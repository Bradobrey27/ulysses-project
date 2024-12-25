import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-episode-12',
  standalone: true,
  imports: [TooltipModule, HeaderComponent, FooterComponent],
  templateUrl: './episode-12.component.html',
  styleUrl: './episode-12.component.scss'
})
export class Episode12Component {

}
