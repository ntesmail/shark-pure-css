import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CssCalendarComponent } from "./calendar.component"

// 定义常量 路由
const routes: any = [
    {
        path: 'csscalendar',
        component: CssCalendarComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [CssCalendarComponent]
})
export class CsscalendarModule { }