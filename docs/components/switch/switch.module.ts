import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssSwitchComponent } from "./switch.component";
import { SharedModule } from '../shared/shared.module';


// 定义常量 路由
const routes: any = [
    {
        path: 'cssswitch',
        component: CssSwitchComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssSwitchComponent]
})
export class CssSwitchModule { }