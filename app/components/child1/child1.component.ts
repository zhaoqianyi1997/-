import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
 
  txt:string;
  @Output() check=new EventEmitter();
  getvalue(e){
    if(e.keyCode==13){
      this.check.emit(this.txt);
      this.txt='';
    }
  }


  constructor() { }

  ngOnInit() {
    
  }
 
}
