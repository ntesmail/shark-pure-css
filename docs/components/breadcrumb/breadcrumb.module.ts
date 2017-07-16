import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssBreadcrumbComponent } from "./breadcrumb.component"
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'cssbreadcrumb',
        component: CssBreadcrumbComponent
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CssBreadcrumbComponent]
})
export class CssBreadcrumbModule { }