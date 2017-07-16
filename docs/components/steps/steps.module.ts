import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssStepsComponent } from "./steps.component";
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'csssteps',
        component: CssStepsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssStepsComponent]
})
export class CssStepsModule { }