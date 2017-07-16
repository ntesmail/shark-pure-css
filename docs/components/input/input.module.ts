import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssInputComponent } from "./input.component";
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'cssinput',
        component: CssInputComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssInputComponent]
})
export class CssInputModule { }