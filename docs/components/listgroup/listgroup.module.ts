import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssListgroupComponent } from "./listgroup.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'csslistgroup',
        component: CssListgroupComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssListgroupComponent]
})
export class CssListgroupModule { }