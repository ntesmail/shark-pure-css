import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssModalComponent } from "./modal.component";
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'cssmodal',
        component: CssModalComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssModalComponent]
})
export class CssModalModule { }