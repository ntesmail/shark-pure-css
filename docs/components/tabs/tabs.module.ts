import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssTabsComponent } from "./tabs.component";
import { SharedModule } from '../shared/shared.module';


// 定义常量 路由
const routes: any = [
    {
        path: 'csstabs',
        component: CssTabsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssTabsComponent]
})
export class CssTabsModule { }