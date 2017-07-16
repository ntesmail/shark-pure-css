import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssTableComponent } from "./table.component"
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'cssstable',
        component: CssTableComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssTableComponent]
})
export class CssTableModule { }