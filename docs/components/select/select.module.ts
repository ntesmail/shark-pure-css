import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssSelectComponent } from "./select.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssradio',
        component: CssSelectComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssSelectComponent]
})
export class CssSelectModule { }