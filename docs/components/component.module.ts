//NgModules
import { NgModule } from '@angular/core';

//Examples
import { CssButtonModule } from './button/button.module';
import { CssRadioModule } from './radio/radio.module';

@NgModule({
    imports: [
        CssButtonModule,
        CssRadioModule
    ]
})
export class ComponentModule { }