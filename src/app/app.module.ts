import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectronicoComponent } from './Modelos/electronico/electronico.component';
import { Electronico2Component } from './Modelos/electronico2/electronico2.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ElectronicoComponent,
    Electronico2Component,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
