import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssAlertComponent } from "./alert.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssalert',
        component: CssAlertComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssAlertComponent]
})
export class CssAlertModule { }