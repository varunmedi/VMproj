import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { MyColorDirective } from './my-color.directive';
import { FilternamePipe } from './pipe/filtername.pipe';
import { FormsModule } from '@angular/forms';
import { SortnamePipe } from './pipe/sortname.pipe';
import { CalcComponent } from './calc/calc.component';
import { HttpClientModule } from '@angular/common/http';
 


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MyColorDirective,
    FilternamePipe,
    SortnamePipe,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
