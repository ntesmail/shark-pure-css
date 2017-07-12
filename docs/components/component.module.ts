//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssSelectModule } from './select/select.module';
import { CssImagesModule } from './images/images.module';
import { CssToastrModule } from './toastr/toastr.module';
import { CssModalModule } from './modal/modal.module';

@NgModule({
    imports: [
        CssButtonModule,
        CssSelectModule,
        CssImagesModule,
        CssToastrModule,
        CssModalModule
    ]
})
export class ComponentModule { }