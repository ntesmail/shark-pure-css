//NgModules
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
//router auth
import { RouterModule } from "@angular/router";
import { ComponentModule } from './components/component.module';
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
        RouterModule.forRoot(appRoutes, { useHash: true }),
        ComponentModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() { }
}