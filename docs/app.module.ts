//NgModules
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
//router auth
import { RouterModule } from "@angular/router";
import { SharedModule } from './components/shared/shared.module';
import { ComponentModule } from './components/component.module';
import { CssDemoModule } from './demo/demo.module';
//components
import { AppComponent } from './app.component';

// 定义常量 路由
const appRoutes: any = [
    {
        path: '',
        redirectTo: '/cssbutton',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        BrowserModule,
        SharedModule.forRoot(),
        RouterModule.forRoot(appRoutes, { useHash: true }),
        ComponentModule,
        CssDemoModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() { }
}