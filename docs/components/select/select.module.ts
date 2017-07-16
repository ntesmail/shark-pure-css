import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssSelectComponent } from "./select.component";
import { SharedModule } from "../shared/shared.module";

// 定义常量 路由
const routes: any = [
    {
        path: 'cssselect',
        component: CssSelectComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssSelectComponent]
})
export class CssSelectModule { }