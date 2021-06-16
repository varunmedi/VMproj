import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VarunComponent } from './varun/varun.component';
import { RameshComponent } from './ramesh/ramesh.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { PreDirectivesComponent } from './pre-directives/pre-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MyColorDirective } from './my-color.directive';
import { TableComponent } from './table/table.component'

@NgModule({
  declarations: [
    AppComponent,
    VarunComponent,
    RameshComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    ClassStyleBindingComponent,
    PreDirectivesComponent,
    AttributeDirectivesComponent,
    MyColorDirective,
    TableComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
