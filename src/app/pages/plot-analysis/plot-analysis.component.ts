import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-ecranisation',
  standalone: true,
  imports: [TooltipModule, HeaderComponent, FooterComponent],
  templateUrl: './ecranisation.component.html',
  styleUrl: './ecranisation.component.scss'
})
export class PlotAnalysisComponent {

}
