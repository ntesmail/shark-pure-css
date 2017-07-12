import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssToastrComponent } from "./toastr.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'csstoastr',
        component: CssToastrComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssToastrComponent]
})
export class CssToastrModule { }