import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssToastrComponent } from "./toastr.component";
import { SharedModule } from '../shared/shared.module';


// 定义常量 路由
const routes: any = [
    {
        path: 'csstoastr',
        component: CssToastrComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssToastrComponent]
})
export class CssToastrModule { }