import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssTableComponent } from "./table.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssstable',
        component: CssTableComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssTableComponent]
})
export class CssTableModule { }