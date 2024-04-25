import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./Apps/Log/sign-up/sign-up.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./Apps/AllPage/home/home.component";
import {AboutComponent} from "./Apps/AllPage/about/about.component";
import {ListComponent} from "./Apps/AllPage/list/list.component";
import {MyPanelComponent} from "./Apps/AllPage/my-panel/my-panel.component";
import {DifaltPageComponent} from "./Apps/AllPage/difalt-page/difalt-page.component";
import {LoginComponent} from "./Apps/Log/login/login.component";

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'List',component:ListComponent},
  {path:'MyPanel',component:MyPanelComponent},
  {path:'DifaltPage',component:DifaltPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
