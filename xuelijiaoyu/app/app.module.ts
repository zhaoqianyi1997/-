import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule }from '@angular/router';
import { HttpClientModule }from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    HomeComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      // HttpClientModule,
      {path:'home',component:HomeComponent,children:[
        // {},
        // {}
      ]},
      {path:'tongbu/:courseId',component:TongbuComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent}
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
