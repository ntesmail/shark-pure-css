import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssDemoComponent } from "./demo.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssdemo',
        component: CssDemoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssDemoComponent]
})
export class CssDemoModule { }