import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssPaginationComponent } from "./pagination.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'csspagination',
        component: CssPaginationComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssPaginationComponent]
})
export class CssPaginationModule { }