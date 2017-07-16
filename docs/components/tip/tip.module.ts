import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssTipComponent } from "./tip.component";
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'csstip',
        component: CssTipComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssTipComponent]
})
export class CssTipModule { }