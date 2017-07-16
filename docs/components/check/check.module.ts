import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssCheckComponent } from "./check.component";
import { SharedModule } from "../shared/shared.module";

// 定义常量 路由
const routes: any = [
    {
        path: 'csscheck',
        component: CssCheckComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssCheckComponent]
})
export class CssCheckModule { }