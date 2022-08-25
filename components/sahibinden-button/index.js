var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let SahibindenButton = class SahibindenButton extends LitElement {
    constructor() {
        super(...arguments);
        this.text = 'Click me!';
    }
    render() {
        return html `
        <button @click=${this._onClick} part="button">
            ${this.text}
        </button>
     `;
    }
    _onClick() {
        this.dispatchEvent(new CustomEvent('button-clicked'));
    }
};
SahibindenButton.styles = css `
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
__decorate([
    property()
], SahibindenButton.prototype, "text", void 0);
SahibindenButton = __decorate([
    customElement('sahibinden-button')
], SahibindenButton);
export { SahibindenButton };
//# sourceMappingURL=index.js.map