import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectronicoComponent } from './Modelos/electronico/electronico.component';
import { Electronico2Component } from './Modelos/electronico2/electronico2.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectronicoComponent,
    Electronico2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
