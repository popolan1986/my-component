//import './myComponent.html';

window.customElements.define('my-component', class extends HTMLElement{
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        const templateNode = window.niTemplates.get('my-component');
        const a2 = templateNode.content.cloneNode(true);
        shadowRoot.appendChild(a2);
        console.log('shadow attached');
    }
});