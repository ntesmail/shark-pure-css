import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssFormComponent } from "./form.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssform',
        component: CssFormComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssFormComponent]
})
export class CssFormModule { }