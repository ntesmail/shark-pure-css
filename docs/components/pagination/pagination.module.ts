import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssPaginationComponent } from "./pagination.component";
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'csspagination',
        component: CssPaginationComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssPaginationComponent]
})
export class CssPaginationModule { }