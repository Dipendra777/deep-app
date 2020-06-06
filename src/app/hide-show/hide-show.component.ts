import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide-show',
  templateUrl: './hide-show.component.html',
  styleUrls: ['./hide-show.component.css']
})
export class HideShowComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show'
  

  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
   this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  

}
