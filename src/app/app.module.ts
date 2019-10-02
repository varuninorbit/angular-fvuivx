import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { FaIconsComponent } from './nav/fa-icons/fa-icons.component';
import { ExamChoiceComponent } from './exam-choice/exam-choice.component';
import { CardComponent } from './card/card.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { MarksComponent } from './marks/marks.component';
import { TestComponent } from './test/test.component';
import { MarksService } from './marks/marks.service';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NavModule,
    RouterModule.forRoot([      
      { path: 'exam-choice', component: ExamChoiceComponent },
      { path: 'chapters', component: ChaptersComponent },
      { path: 'marks', component: MarksComponent },
      { path: 'test', component: TestComponent }
      //{ path: 'products/:productId', component: ProductDetailsComponent },
    ]),

    HttpClientModule
  ],
  declarations: [ AppComponent, ExamChoiceComponent, CardComponent, ChaptersComponent, MarksComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  exports:[
    RouterModule
  ],
  providers: [MarksService]
})
export class AppModule { }
