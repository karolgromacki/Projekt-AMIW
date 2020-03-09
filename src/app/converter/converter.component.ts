import { Component, OnInit } from '@angular/core';
import * as copy from 'copy-to-clipboard';

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
  copyInputMessage(id) {
    // inputElement.select();
    // document.execCommand('copy');
    copy((<HTMLInputElement>document.getElementById(id)).value);
  }
  convertBajt() {
    this.KBInput = this.BInput / 1024;
    this.MBInput = this.KBInput / 1024;
    this.GBInput = this.MBInput / 1024;
    this.TBInput = this.GBInput / 1024;
  }
  convertKilobajt() {
    this.BInput = this.KBInput * 1024;
    this.MBInput = this.KBInput / 1024;
    this.GBInput = this.MBInput / 1024;
    this.TBInput = this.GBInput / 1024;

  }
  convertMegabajt() {
    this.KBInput = this.MBInput * 1024;
    this.BInput = this.KBInput * 1024;
    this.GBInput = this.MBInput / 1024;
    this.TBInput = this.GBInput / 1024;
  }

  convertGigabajt() {
    this.TBInput = this.GBInput / 1024;
    this.MBInput = this.GBInput * 1024;
    this.KBInput = this.MBInput * 1024;
    this.BInput = this.KBInput * 1024;
  }

  convertTerabajt() {
    this.GBInput = this.TBInput * 1024;
    this.MBInput = this.GBInput * 1024;
    this.KBInput = this.MBInput * 1024;
    this.BInput = this.KBInput * 1024;
  }
}
