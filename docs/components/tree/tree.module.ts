import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssTreeComponent } from "./tree.component";
import { SharedModule } from "../shared/shared.module";

// 定义常量 路由
const routes: any = [
    {
        path: 'csstree',
        component: CssTreeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssTreeComponent]
})
export class CssTreeModule { }