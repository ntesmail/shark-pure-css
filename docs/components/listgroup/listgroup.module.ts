import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssListgroupComponent } from "./listgroup.component";
import { SharedModule } from "../shared/shared.module";

// 定义常量 路由
const routes: any = [
    {
        path: 'csslistgroup',
        component: CssListgroupComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssListgroupComponent]
})
export class CssListgroupModule { }