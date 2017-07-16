import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssIconfontComponent } from "./iconfont.component";
import { SharedModule } from "../shared/shared.module";

// 定义常量 路由
const routes: any = [
    {
        path: 'cssiconfont',
        component: CssIconfontComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssIconfontComponent]
})
export class CssIconfontModule { }