import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssFunctionComponent } from "./function.component";
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'cssfunction',
        component: CssFunctionComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssFunctionComponent]
})
export class CssFunctionModule { }