import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssDatetimepickerComponent } from "./datetimepicker.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssdatetimepicker',
        component: CssDatetimepickerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssDatetimepickerComponent]
})
export class CssDatetimepickerModule { }