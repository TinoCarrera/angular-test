import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import translationsES from '../../public/i18n/es.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setTranslation('es', translationsES);
    this.translate.setDefaultLang('es');
  }
}
