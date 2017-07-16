import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssTagComponent } from "./tag.component";
import { SharedModule } from '../shared/shared.module';

// 定义常量 路由
const routes: any = [
    {
        path: 'csstag',
        component: CssTagComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssTagComponent]
})
export class CssTagModule { }