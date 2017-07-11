import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssButtonComponent } from "./button.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssbutton',
        component: CssButtonComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssButtonComponent]
})
export class CssButtonModule { }