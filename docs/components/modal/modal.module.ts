import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssModalComponent } from "./modal.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssmodal',
        component: CssModalComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssModalComponent]
})
export class CssModalModule { }