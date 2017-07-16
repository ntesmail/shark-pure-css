import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssGridComponent } from "./grid.component";
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'cssgrid',
        component: CssGridComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssGridComponent]
})
export class CssGridModule { }