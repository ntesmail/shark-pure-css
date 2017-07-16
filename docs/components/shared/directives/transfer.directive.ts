import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as Prism from 'prismjs';

@Directive({
    selector: '[transfer]',
    exportAs: 'transfer'
})
export class TransferDirective {
    constructor(
        private elementRef: ElementRef
    ) { 
    }
    render() {
        console.log(12);
        const nativeEle = this.elementRef.nativeElement;
        const html = Prism.highlight(nativeEle.innerHTML, this.getLanguage(nativeEle));
        const htmlrst = `<pre class="language-html">
                            <code class="language-html">
                                <span class="token tag">
                                    ${html}
                                </span>
                            </code>
                        </pre>`;
        nativeEle.innerHTML = htmlrst;
    }
    getLanguage(ele) {
        if (ele.className.indexOf('css') > -1) {
            return Prism.languages.css;
        } else if (ele.className.indexOf('js') > -1) {
            return Prism.languages.javascript;
        } else {
            return Prism.languages.markup;
        }
    }
    reloadJs(){
        
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(v) {
        this.render();
    }
    ngOnDestroy() {
    }

}
