import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssIconfontComponent } from "./iconfont.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssiconfont',
        component: CssIconfontComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssIconfontComponent]
})
export class CssIconfontModule { }