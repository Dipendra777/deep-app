import { Component } from '@angular/core';
import { DipService } from './dip.service';
import {  HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'my-dip-app';
  get: any;
  constructor(private svs:DipService, private http: HttpClient) { 
    this.svs.printToConsole("Go to service");
  }
  ngOnInit(){
   let obs= this.get.http('');
obs.subscribe((response)=>console.log(response));
  }

}
