//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssRadioModule } from './radio/radio.module';
import { CssPaginationModule } from './pagination/pagination.module';

@NgModule({
    imports: [
        CssButtonModule,
        CssRadioModule,
        CssPaginationModule
    ]
})
export class ComponentModule { }