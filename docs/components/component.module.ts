//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssPaginationModule } from './pagination/pagination.module';
import { CssSelectModule } from './select/select.module';
import { CssImagesModule } from './images/images.module';
import { CssToastrModule } from './toastr/toastr.module';
import { CssModalModule } from './modal/modal.module';
import { CssInputModule } from './input/input.module';
import { CssTipModule } from './tip/tip.module';
import { CssSwitchModule } from './switch/switch.module';
import { CssStepsModule } from './steps/steps.module';
import { CssTabsModule } from './tabs/tabs.module';
import { CssSelecterModule } from './selecter/selecter.module';
import { CssTableModule } from './table/table.module';
import { CssFormModule } from './form/form.module';
import { CssTreeModule } from './tree/tree.module';
import { CssProgressModule } from './progress/progress.module';
import { CssBreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CsscalendarModule } from './calendar/calendar.module';
import { CssLayoutModule } from './layout/layout.module';
import { CssNotifyModule } from './notify/notify.module';
import { CssUploadModule } from './upload/upload.module';
@NgModule({
    imports: [
        CssButtonModule,
        CssPaginationModule,
        CssSelectModule,
        CssImagesModule,
        CssToastrModule,
        CssModalModule,
        CssInputModule,
        CssTipModule,
        CssSwitchModule,
        CssStepsModule,
        CssTabsModule,
        CssSelecterModule,
        CssTableModule,
        CssFormModule,
        CssTreeModule,
        CssProgressModule,
        CssBreadcrumbModule,
        CsscalendarModule,
        CssLayoutModule,
        CssNotifyModule,
        CssUploadModule
    ]
})
export class ComponentModule { }