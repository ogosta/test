import { html, css, LitElement, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import style from './index.css?inline'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('test-element')
export class TestWidget extends LitElement {

  @property({type:String})text = "";

   static styles = css`${unsafeCSS(style)}`;

 render(){
  return html`
  <div class="w-full bg-white text-green-500 rounded-md py-3 px-2 text-center">
    ${this.text}
  </div>
  `
 }
}


declare global {
  interface HTMLElementTagNameMap {
    'test-element': TestWidget
  }
}
