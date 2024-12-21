import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-episode-11',
  standalone: true,
  imports: [TooltipModule, HeaderComponent, FooterComponent],
  templateUrl: './episode-11.component.html',
  styleUrl: './episode-11.component.scss'
})
export class Episode11Component {

}