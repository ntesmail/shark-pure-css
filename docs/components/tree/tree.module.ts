import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssTreeComponent } from "./tree.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'csstree',
        component: CssTreeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssTreeComponent]
})
export class CssTreeModule { }