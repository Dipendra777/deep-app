import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DipComponent } from './dip/dip.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HideShowComponent } from './hide-show/hide-show.component';
const routes: Routes = [ 
 
  {
  path: 'create',
  component: DipComponent,
}, 
{
  path: 'hideShow',
  component: HideShowComponent ,
}, 
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
