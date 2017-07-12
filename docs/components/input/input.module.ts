import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssInputComponent } from "./input.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssinput',
        component: CssInputComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssInputComponent]
})
export class CssInputModule { }