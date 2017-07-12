import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssStepsComponent } from "./steps.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'csssteps',
        component: CssStepsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssStepsComponent]
})
export class CssStepsModule { }