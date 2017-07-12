import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssTipComponent } from "./tip.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'csstip',
        component: CssTipComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssTipComponent]
})
export class CssTipModule { }