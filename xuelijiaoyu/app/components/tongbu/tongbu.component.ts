import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router }from '@angular/router';//在组件中接收数据
//
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  ngOnInit() {
    // this.courseId = this.router.snapshot.params['courseId'];//courseId是在app.module中定义的那个名字
    this.router.params.subscribe((params)=>{
      this.courseId = params['courseId'];//一变化就会执行一次，响应式编程
    });//订阅前面可观察的对象
  }
  go(){
    this.route.navigate(['/shequ']);//这个参数是routerLink那个数组中的参数
  }
}
