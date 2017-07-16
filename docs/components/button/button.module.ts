import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssButtonComponent } from "./button.component";
import { SharedModule } from "../shared/shared.module";

// 定义常量 路由
const routes: any = [
    {
        path: 'cssbutton',
        component: CssButtonComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssButtonComponent]
})
export class CssButtonModule { }