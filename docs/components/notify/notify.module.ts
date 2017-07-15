import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssNotifyComponent } from "./notify.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssnotify',
        component: CssNotifyComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssNotifyComponent]
})
export class CssNotifyModule { }