import {LitElement, html, customElement, property} from 'lit-element'

@customElement('bilzaa-counter')
class BilzaaCounter extends LitElement {
  @property({type: Number}) count = 0

  clickHandler() {
    this.count++
  }

  render() {
    return html`
      <p>This Counter is made By Bilzaa: ${this.count}</p>
      <button @click="${(this.clickHandler)}">Click</button>
    `
  }
}