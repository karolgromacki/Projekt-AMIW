import { Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Pipe({ name: "currencySpace" })
export class CurrencyPipePipe extends CurrencyPipe {

  transform(value: number, ...args: any[]): string {
    return super.transform(value, ...args).replace(/([^\d.,])(\d)/, "$1 $2");
  }

}
