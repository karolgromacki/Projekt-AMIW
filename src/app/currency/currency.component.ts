import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { ICurrency } from '../currency';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  public currencies: ICurrency;
  public display = false;
  public userCurrency;
  public url = "https://api.exchangeratesapi.io/latest?base=";
  public currency = ['PLN', 'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'SEK', 'NZD', 'HKD', 'ISK', 'DKK', 'HUF', 'CZK', 'RON', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'THB', 'MYR', 'BGN', 'TRY', 'CNY', 'NOK', 'ZAR', 'MXN', 'SGD', 'ILS', 'KRW'];
  constructor(private _currencyService: CurrencyService) { }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  _userInput: string;
  get userInput(): string {
    return this._userInput;
  }

  set userInput(value: string) {
    this._userInput = value;
  }
  onInputKeyDown(event) {

    if (!event.key.match('[0-9]')) {
      event.preventDefault();
    }
  }

  ngOnInit() {

  }
  inputChange() {
    if (this.userCurrency == null)
      this.userCurrency = "1";
    this._currencyService.getCurrency(this.url + this.userInput).subscribe(data => this.currencies = data);
    this.display = true;
  }
}

