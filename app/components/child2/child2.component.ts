import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() arr;
  @Input() arr1;
  delete0(i){
    this.arr.splice(i,1);
  }
  delete1(i){
    this.arr1.splice(i,1)
  }

  change0(i){
    this.arr1.push(this.arr[i]);
    this.arr.splice(i,1);
  
  }
  change1(i){
    this.arr.push(this.arr1[i]);
    this.arr1.splice(i,1);
  
  }



  constructor() { }

  ngOnInit() {
  }

}
