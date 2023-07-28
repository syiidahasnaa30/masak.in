import "./flyer-right.js";
import "./flyer-left.js";
class Flyer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <flyer-left></flyer-left>
    <flyer-right></flyer-right>
    `;
  }
}
customElements.define("flyer-element", Flyer);
