import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  data:string[]=[];
  data1:string[]=[];
  dataPush(txt){
    this.data.push(txt);
  }
  ngOnInit() {
  }
  
}
