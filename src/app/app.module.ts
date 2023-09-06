import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './common/interceptors/api.interceptor';
import {FooterComponent} from './components/footer.component';
import {HeaderComponent} from './components/header.component';
import {NZ_I18N, ru_RU} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import ru from '@angular/common/locales/ru';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {API_URL} from './common/injection-tokens/api-url.token';
import {environment} from '../environments/environment';
import {QuillModule} from 'ngx-quill';
import {AuthInterceptor} from './common/interceptors/auth.interceptor';
import {AngularSvgIconModule, SvgLoader} from "angular-svg-icon";
import {SVG_ICONS} from "./common/injection-tokens/svg-icons.token";
import {SidebarComponent} from "./pages/sidebar/sidebar.component";

registerLocaleData(ru, 'RU-ru');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FooterComponent,
    HeaderComponent,
    FormsModule,
    BrowserAnimationsModule,
    NzNotificationModule,
    QuillModule.forRoot(),
    AngularSvgIconModule.forRoot(),
    SidebarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'RU-ru'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: NZ_I18N,
      useValue: ru_RU
    },
    {
      provide: API_URL,
      useValue: environment.apiUrl
    },
    {
      provide: SVG_ICONS,
      useValue: './assets/svgicons/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
