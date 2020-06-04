import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dip',
  templateUrl: './dip.component.html',
  styleUrls: ['./dip.component.css']
})
export class DipComponent implements OnInit {
  onClick():void{
    console.log('button is click')

  }
 keyPress():void{}
  
  inputText:string="Intial ";
   isDisabled:boolean =true;
  title = 'my-dip';
  
  
  date:Date=new Date();
  constructor() { }

  ngOnInit(): void {
    
    }
  }
  


