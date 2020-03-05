import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ICurrency } from './currency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {


  constructor(private http: HttpClient) { }

  getCurrency(url:string): Observable<ICurrency> {
    return this.http.get<ICurrency>(url);
  }
}
