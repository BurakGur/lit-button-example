import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('sahibinden-button')
export class SahibindenButton extends LitElement {
    static override styles = css`
    :host {
        display: block;
        padding: 50px;
    }
    button {
        border: solid 1px #FFE800;
        background-color: #FFE800;
        color: #000000;
        height: 54px;
        width: 160px;
        cursor: pointer;
    }
   `;
 
   @property()
   text = 'Click me!';
 
   override render() {
     return html`
        <button @click=${this._onClick} part="button">
            ${this.text}
        </button>
     `;
   }
 
   private _onClick() {
     this.dispatchEvent(new CustomEvent('button-clicked'));
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'sahibinden-button': SahibindenButton;
   }
 }
 