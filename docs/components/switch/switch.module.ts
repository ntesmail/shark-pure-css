import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssSwitchComponent } from "./switch.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssswitch',
        component: CssSwitchComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssSwitchComponent]
})
export class CssSwitchModule { }