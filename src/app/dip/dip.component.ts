import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { State } from './state';

@Component({
  selector: 'app-dip',
  templateUrl: './dip.component.html',
  styleUrls: ['./dip.component.css']
})
export class DipComponent implements OnInit {
  
  state:State[];
 
  
  
  //satSelected:Number;
  onClick():void{
    console.log('button is click')

  }
 keyPress():void{}
  
  inputText:string="Intial ";
   isDisabled:boolean =true;
  title = 'my-dip';
  
  
  date:Date=new Date();
  constructor() { }

  ngOnInit() {
   this.state=[
      {Id:1,Name:'MO'},
      {Id:2,Name:'TX'},
    ];
//this.stSelected=1;

    
    }
  }
  


