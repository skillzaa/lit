import {LitElement, html,css} from 'lit-element'

class BilzaaColorPicker extends LitElement {
static get styles() {
return css`
#outerDiv{
  border:2px solid silver;    
  background-color: rgb(220, 247, 238);
  max-width:300px;
  }    
  #topDiv{
  width:100%;
  padding:0px;
  background-color: rgb(220, 247, 238);
  max-width:290px;
  display:flex;
  justify-content:center;
  }    
  #theElement{
  width:100%;
  padding:0px;
  background-color: rgb(220, 247, 238);
  }    
`}

  static get properties(){
    return {
      title : {type:String},  
      property: {type: String},
      boxtype: {type: String},
      value : {type:String}
    }
}    


constructor(){
super();
this.title="Your Title Here..";
this.boxtype="element";
this.property = "borderColor";
this.value = "#ea2323";
}

clickHandler(e) {
let event = new CustomEvent('bilzaa-colorpicker', {
  bubbles: true,
    detail: {      
      property: this.property,
      boxtype : this.boxtype,
      value:    e.target.value
    }
  });
this.dispatchEvent(event);
//console.log('even :', event);
}

render() {
return html`

<div id="outerDiv">
<div id="topDiv">${this.title}</div>
<input id="theElement"  type="color"
@change="${(this.clickHandler)}"
value="${this.value}"
>
</div>
`
  }
}
customElements.define('bilzaa-colorpicker', BilzaaColorPicker);