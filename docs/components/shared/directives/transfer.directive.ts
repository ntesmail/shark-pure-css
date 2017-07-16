import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-bash';

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
        if (ele.className.indexOf('bash') > -1) {
            return Prism.languages.bash;
        } else if (ele.className.indexOf('css') > -1) {
            return Prism.languages.css;
        } else if (ele.className.indexOf('js') > -1) {
            return Prism.languages.javascript;
        } else {
            return Prism.languages.markup;
        }
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(v) {
        
    }
    ngOnDestroy() {
        
    }

}
