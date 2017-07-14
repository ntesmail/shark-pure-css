import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssLayoutComponent } from "./layout.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'csslayout',
        component: CssLayoutComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssLayoutComponent]
})
export class CssLayoutModule { }