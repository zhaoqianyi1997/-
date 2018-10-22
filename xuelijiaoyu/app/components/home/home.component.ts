import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private http:HttpClient) { }
  course;
  ngOnInit() {
  //  this.http.get('/api/course').subscribe((data)=>{
  //     this.course = data;
  //   })//subscribe()是一个观察者，前面是被观察的对象
  }
  userName:string = '3-赵芊伊';
  FansCount:number = 0;
  FollowCount:number = 1;

  UnsubmittedCount:number = 0;
  CompletedCount:number = 10;
  FinishedCount:number = 0;
}

