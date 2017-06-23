import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './controls/header/header.component';
import { FooterComponent } from './controls/footer/footer.component';
import { TopnavbarComponent } from './controls/topnavbar/topnavbar.component';
import { LeftnavbarComponent } from './controls/leftnavbar/leftnavbar.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

//surveys
import { SurveyService } from './services/survey.service';
import { QuestionService } from './services/question.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

//modules
import { SharedModule } from './modules/shared.module';
import { SurveyModule } from './modules/survey.module';
import { SurveyRoutingModule } from './modules/survey-routing.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopnavbarComponent,
    LeftnavbarComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    SharedModule,
    SurveyModule,    
    SurveyRoutingModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [SurveyService, QuestionService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
