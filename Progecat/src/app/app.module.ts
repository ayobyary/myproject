import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginOneComponent } from './Apps/Log/login-one/login-one.component';
import { SignUpComponent } from './Apps/Log/sign-up/sign-up.component';
import {AuthenticateService} from "./Authenticict/authenticate.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './Apps/NAVBAR/navbar/navbar.component';
import { HomeComponent } from './Apps/AllPage/home/home.component';
import { AboutComponent } from './Apps/AllPage/about/about.component';
import { MyPanelComponent } from './Apps/AllPage/my-panel/my-panel.component';
import { ListComponent } from './Apps/AllPage/list/list.component';
import { DifaltPageComponent } from './Apps/AllPage/difalt-page/difalt-page.component';
import { ListcompnetComponent } from './Apps/AllPage/list/listcompnet/listcompnet.component';
import { HederComponent } from './Apps/AllPage/about/heder/heder.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { LanComponent } from './Apps/lan/lan.component';
import { MapComponent } from './Apps/map/map.component';
import { ListcompnetcolComponent } from './Apps/AllPage/list/listcompnetcol/listcompnetcol.component';
import { SidebarProfaileComponent } from './Apps/NAVBAR/sidebar-profaile/sidebar-profaile.component';
import { NewComListComponent } from './Apps/AllPage/list/new-com-list/new-com-list.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginOneComponent,
    SignUpComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MyPanelComponent,
    ListComponent,
    DifaltPageComponent,
    ListcompnetComponent,
    HederComponent,
    LanComponent,
    MapComponent,
    ListcompnetcolComponent,
    SidebarProfaileComponent,
    NewComListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    HttpClientModule,




  ],
  providers: [
    provideClientHydration(),
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
