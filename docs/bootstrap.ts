// global css
import "../scss/sharkpure.scss";
import "./asset/scss/prism.scss";
import "./asset/scss/doc.scss";

// bootstrap
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);