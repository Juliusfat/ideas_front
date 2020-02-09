import { GraphqlModule } from './graphql/graphql.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { TokenInterceptor } from './interceptor/token-interceptor';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GraphqlModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    ButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
