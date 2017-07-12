//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssPaginationModule } from './pagination/pagination.module';
import { CssSelectModule } from './select/select.module';
import { CssImagesModule } from './images/images.module';
import { CssToastrModule } from './toastr/toastr.module';
import { CssAlertModule } from './alert/alert.module';
import { CssModalModule } from './modal/modal.module';
import { CssInputModule } from './input/input.module';
import { CssTipModule } from './tip/tip.module';
import { CssSwitchModule } from './switch/switch.module';
import { CssStepsModule } from './steps/steps.module';

@NgModule({
    imports: [
        CssButtonModule,
        CssPaginationModule,
        CssSelectModule,
        CssImagesModule,
        CssToastrModule,
        CssAlertModule,
        CssModalModule,
        CssInputModule,
        CssTipModule,
        CssSwitchModule,
        CssStepsModule
    ]
})
export class ComponentModule { }