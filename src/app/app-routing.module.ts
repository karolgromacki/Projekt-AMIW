import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { ConverterComponent } from './converter/converter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'converter', component: ConverterComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: '**', component: NotFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, NotFoundComponent, CurrencyComponent, ConverterComponent, CalculatorComponent]