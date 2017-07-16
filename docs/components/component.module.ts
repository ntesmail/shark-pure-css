//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssPaginationModule } from './pagination/pagination.module';
import { CssCheckModule } from './check/check.module';
import { CssImagesModule } from './images/images.module';
import { CssToastrModule } from './toastr/toastr.module';
import { CssModalModule } from './modal/modal.module';
import { CssInputModule } from './input/input.module';
import { CssTipModule } from './tip/tip.module';
import { CssSwitchModule } from './switch/switch.module';
import { CssStepsModule } from './steps/steps.module';
import { CssTabsModule } from './tabs/tabs.module';
import { CssSelectModule } from './select/select.module';
import { CssTableModule } from './table/table.module';
import { CssFormModule } from './form/form.module';
import { CssTreeModule } from './tree/tree.module';
import { CssProgressModule } from './progress/progress.module';
import { CssBreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { CssDatetimepickerModule } from './datetimepicker/datetimepicker.module';
import { CssLayoutModule } from './layout/layout.module';
import { CssNotifyModule } from './notify/notify.module';
import { CssUploadModule } from './upload/upload.module';
import { CssIconfontModule } from './iconfont/iconfont.module';
import { CssTagModule } from './tag/tag.module';
import { CssListgroupModule } from './listgroup/listgroup.module';
@NgModule({
        imports: [
                CssButtonModule,
                CssPaginationModule,
                CssCheckModule,
                CssImagesModule,
                CssToastrModule,
                CssModalModule,
                CssInputModule,
                CssTipModule,
                CssSwitchModule,
                CssStepsModule,
                CssTabsModule,
                CssSelectModule,
                CssTableModule,
                CssFormModule,
                CssTreeModule,
                CssProgressModule,
                CssBreadcrumbModule,
                CssDatetimepickerModule,
                CssLayoutModule,
                CssNotifyModule,
                CssUploadModule,
                CssIconfontModule,
                CssTagModule,
                CssListgroupModule
        ]
})
export class ComponentModule { }