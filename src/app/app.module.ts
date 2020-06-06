import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DipComponent } from './dip/dip.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DipService } from './dip.service';
import { HideShowComponent } from './hide-show/hide-show.component';


@NgModule({
  declarations: [
    AppComponent,
    DipComponent,
    HideShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
