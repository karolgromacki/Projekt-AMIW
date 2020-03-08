import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public trans = false;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');
  }

  ngOnInit(): void {
  }
  useLanguage(language: string) {
    this.translate.use(language);
    if (language == 'en') {
    this.trans=true;
    }
    else
    this.trans=false;
  }
}
