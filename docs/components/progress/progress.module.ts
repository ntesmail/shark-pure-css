import { NgModule } from '@angular/core';
// import { NgClass } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CssProgressComponent } from "./progress.component";
import { SharedModule } from '../shared/shared.module';


// 定义常量 路由
const routes: any = [
    {
        path: 'cssprogress',
        component: CssProgressComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        // NgClass
    ],
    declarations: [CssProgressComponent]
})
export class CssProgressModule { }
function parseQuery(url) {
    var paramArr = url.split('&');
    var paramObj = {};
    for (var i = 0; i < paramArr.length; i++)
        paramObj[paramArr[i].split('=')[0]] = paramArr[i].split('=')[1];

    return paramObj;
}