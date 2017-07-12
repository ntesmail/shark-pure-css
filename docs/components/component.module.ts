//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssRadioModule } from './radio/radio.module';
import { CssPaginationModule } from './pagination/pagination.module';
import { CssSelectModule } from './select/select.module';
import { CssImagesModule } from './images/images.module';
import { CssToastrModule } from './toastr/toastr.module';
import { CssModalModule } from './modal/modal.module';

@NgModule({
    imports: [
        CssButtonModule,
        CssRadioModule,
        CssPaginationModule,
        CssSelectModule,
        CssImagesModule,
        CssToastrModule,
        CssModalModule
    ]
})
export class ComponentModule { }