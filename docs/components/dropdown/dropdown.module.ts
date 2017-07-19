import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssDropdownComponent } from "./dropdown.component";
import { SharedModule } from "../shared/shared.module";

// 定义常量 路由
const routes: any = [
    {
        path: 'cssdropdown',
        component: CssDropdownComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssDropdownComponent]
})
export class CssDropdownModule { }