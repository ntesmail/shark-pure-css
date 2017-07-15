import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssTagComponent } from "./tag.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'csstag',
        component: CssTagComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssTagComponent]
})
export class CssTagModule { }