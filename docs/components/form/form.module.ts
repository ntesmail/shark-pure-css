import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssFormComponent } from "./form.component";
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'cssform',
        component: CssFormComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssFormComponent]
})
export class CssFormModule { }