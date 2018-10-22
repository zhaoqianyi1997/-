// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute }from '@angular/router'
// @Component({
//   selector: 'app-shequ',
//   templateUrl: './shequ.component.html',
//   styleUrls: ['./shequ.component.css']
// })
// export class ShequComponent implements OnInit {

//   constructor(private router:ActivatedRoute) { }

//   ngOnInit() {
//     console.log(this.router.snapshot.queryParams['id']);
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:ActivatedRoute
  ) { }
  shequId:number;
  shequ;
  conversation;

  ngOnInit() {
    this.shequId = this.router.snapshot.params['communityId'];
    
    this.http.get('/api/community').subscribe((data)=>{
      this.shequ = data;
    })
    this.http.get('/api/conversation').subscribe((data)=>{
      this.conversation = data;
    })
  }

}
