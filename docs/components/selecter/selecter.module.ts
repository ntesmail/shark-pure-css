import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssSelecterComponent } from "./selecter.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssselecter',
        component: CssSelecterComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssSelecterComponent]
})
export class CssSelecterModule { }