import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthenticateService} from "../../Authenticict/authenticate.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-lan',
  templateUrl: './lan.component.html',
  styleUrl: './lan.component.css'
})
export class LanComponent {
  constructor(private translateService: TranslateService)
  {
    translateService.setDefaultLang('fa')
  }
  changeLanguage(langCode: string) {
    this.translateService.use(langCode);
  }
}
