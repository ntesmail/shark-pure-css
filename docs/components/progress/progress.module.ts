import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssProgressComponent } from "./progress.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssprogress',
        component: CssProgressComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssProgressComponent]
})
export class CssProgressModule { }