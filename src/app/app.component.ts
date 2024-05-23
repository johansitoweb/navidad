import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Section2Component } from './section2/section2.component';
import { RegalosComponent } from './regalos/regalos.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Section2Component,RegalosComponent,FooterComponent,VideoComponent],
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'navidad';
  nome="Feliz Navidad";
  defecto="imagen principal o inicial"
}
