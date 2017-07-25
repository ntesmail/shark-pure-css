import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssListComponent } from "./list.component";
import { SharedModule } from "../shared/shared.module";

// 定义常量 路由
const routes: any = [
    {
        path: 'csslist',
        component: CssListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssListComponent]
})
export class CssListModule { }