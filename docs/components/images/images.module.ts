import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssImagesComponent } from "./images.component";
import { SharedModule } from "../shared/shared.module";

// 定义常量 路由
const routes: any = [
    {
        path: 'cssimages',
        component: CssImagesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssImagesComponent]
})
export class CssImagesModule { }