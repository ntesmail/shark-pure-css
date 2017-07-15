import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssUploadComponent } from "./Upload.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'cssupload',
        component: CssUploadComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssUploadComponent]
})
export class CssUploadModule { }