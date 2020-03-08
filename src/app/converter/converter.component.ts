import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['../app.component.scss', './converter.component.scss']
})
export class ConverterComponent implements OnInit {


  BInput: number;
  KBInput: number;
  MBInput: number;
  GBInput: number;
  TBInput: number;

  constructor() { }

  ngOnInit(): void {
  }
  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
  convertBajt(event) {

    if (!event.key.match('[0-9]'))
      event.preventDefault();
    this.KBInput = this.BInput / 1024;
    this.MBInput = this.KBInput / 1024;
    this.GBInput = this.MBInput / 1024;
    this.TBInput = this.GBInput / 1024;
  }
  convertKilobajt(event) {

    if (!event.key.match('[0-9]'))
      event.preventDefault();
    this.BInput = this.KBInput * 1024;
    this.MBInput = this.KBInput / 1024;
    this.GBInput = this.MBInput / 1024;
    this.TBInput = this.GBInput / 1024;

  }
  convertMegabajt(event) {

    if (!event.key.match('[0-9]'))
      event.preventDefault();
    this.KBInput = this.MBInput * 1024;
    this.BInput = this.KBInput * 1024;
    this.GBInput = this.MBInput / 1024;
    this.TBInput = this.GBInput / 1024;
  }

  convertGigabajt(event) {

    if (!event.key.match('[0-9]'))
      event.preventDefault();
    this.TBInput = this.GBInput / 1024;
    this.MBInput = this.GBInput * 1024;
    this.KBInput = this.MBInput * 1024;
    this.BInput = this.KBInput * 1024;
  }

  convertTerabajt(event) {

    if (!event.key.match('[0-9]'))
      event.preventDefault();
    this.GBInput = this.TBInput * 1024;
    this.MBInput = this.GBInput * 1024;
    this.KBInput = this.MBInput * 1024;
    this.BInput = this.KBInput * 1024;
  }
}
