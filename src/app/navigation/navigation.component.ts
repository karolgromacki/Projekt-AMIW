import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public trans = false;
  public lang = "";
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pl');
  }s

  ngOnInit(): void {
     this.getLang();
  }
  useLanguage(language: string) {
    this.lang=language;
    this.translate.use(this.lang);
    if (this.lang == 'en') {
      this.trans = true;
      localStorage.setItem('img', JSON.stringify(this.trans));
      localStorage.setItem('lang', JSON.stringify(this.lang));
    }
    else
      this.trans = false;
      localStorage.setItem('img', JSON.stringify(this.trans));
      localStorage.setItem('lang', JSON.stringify(this.lang));
  }
  getLang() {
    if (localStorage.getItem('lang') === null && localStorage.getItem('img') === null) {
      this.trans = false;
    }
    else {
      this.lang = JSON.parse(localStorage.getItem('lang'));
      this.trans = JSON.parse(localStorage.getItem('img'));
      this.translate.use(this.lang);
    }
  }
}
