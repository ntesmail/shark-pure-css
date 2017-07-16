import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssUploadComponent } from "./Upload.component";
import { SharedModule } from '../shared/shared.module';


// 定义常量 路由
const routes: any = [
    {
        path: 'cssupload',
        component: CssUploadComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [CssUploadComponent]
})
export class CssUploadModule { }