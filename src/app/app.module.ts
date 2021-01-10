import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHttpInterceptorService } from './GlobalHttpInterceptorService';
import { DetailComponent } from './detail/detail.component';
import { ListeGamesComponent } from './liste-games/liste-games.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListeGamesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule,NgbModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
