import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssRadioComponent } from "./radio.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssradio',
        component: CssRadioComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssRadioComponent]
})
export class CssRadioModule { }