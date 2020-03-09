import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent implements OnInit {
  public stringValue = "0";
  public last = "";
  public operator = false;
  public history = " ";
  constructor() { }
  ngOnInit(): void {
    this.getOperation();
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  onInputKeyDown(event) {
    if (this.stringValue == "0")
      this.stringValue = "";
    if (this.stringValue.includes(".")) {
      this.operator = true;
    }
  }

  onDigitClick(event) {

    if (this.stringValue == "0") this.stringValue = "";
    if (this.stringValue.length < 19)
      this.stringValue += event.target.value;
  }

  onDotClick() {
    this.last = this.stringValue.substr(this.stringValue.length - 1);
    if (this.stringValue != "" && this.last.match('[0-9]') && this.operator != true) {
      this.stringValue += ".";
      this.operator = true;
    }
  }
  onOperandClick(event) {
    this.last = this.stringValue.substr(this.stringValue.length - 1);
    if (this.stringValue == "" && event.target.value == "-") {
      this.stringValue += event.target.value;
      this.operator = false;
    }
    if (this.stringValue != "" && this.last.match('[0-9]')) {
      this.stringValue += event.target.value;
      this.operator = false;
    }
  }
  onEqualsClick() {
    this.last = this.stringValue.substr(this.stringValue.length - 1);
    if (this.stringValue != "" && this.last.match('[0-9]')) {
      sessionStorage.setItem('operation', JSON.stringify(this.stringValue));
      this.stringValue = eval(this.stringValue).toFixed(10);
      for (let i = this.stringValue.length - 1; i >= 0; --i) {
        if (this.stringValue.charAt(i) == ".") {
          this.stringValue = this.stringValue.slice(0, -1);
          break;
        }
        else if (this.stringValue.charAt(i) != "0") {
          break;
        }
        else
          this.stringValue = this.stringValue.slice(0, -1);
      }
      if (this.stringValue.includes(".")) {
        this.operator = true;
      }
      this.getOperation();
    }
  }


  getOperation() {
    if (sessionStorage.getItem('operation') === null) {
      this.history = "";
    }
    else {
      this.history = JSON.parse(sessionStorage.getItem('operation'));
    }
  }

  onBackClick() {
    if (this.stringValue.charAt(this.stringValue.length - 1) == ".") {
      this.operator = false;
    }
    this.stringValue = this.stringValue.slice(0, this.stringValue.length - 1);
  }
  onClearClick() {
    this.stringValue = "0";
    this.operator = false;
  }
  toCalc() {
    this.stringValue = this.history;
  }
}
