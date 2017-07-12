//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssSelectModule } from './select/select.module';
import { CssImagesModule } from './images/images.module';

@NgModule({
    imports: [
        CssButtonModule,
        CssSelectModule,
        CssImagesModule
    ]
})
export class ComponentModule { }