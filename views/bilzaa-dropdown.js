import {LitElement, html, customElement, property,css} from 'lit-element'

class BilzaaDropDown extends LitElement {
static get properties(){
    return {
      title : {type:String},  
      property: {type: String},
      boxtype: {type: String},
      value: {type: String},
      options: {type: Array}
    }
}    
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
.opt{
font-size: 16px;
}    
`
}

constructor(){
super();
this.title="Your Title Here..";
this.boxtype="element";
this.property = "borderColor";
this.value = "center";
this.options= [];
}

changeHandler(e) {
//  console.log('this.options :', this.options);  
let event = new CustomEvent('bilzaa-dropdown', {
    detail: {      
      property: this.property,
      boxtype : this.boxtype,
      value:    e.target.value
    }
  });
this.dispatchEvent(event);
 console.log('even :', event);
}

render() {
return html`
<div id="outerDiv">
<div id="topDiv"
@click="${this.clickHandler}"
>${this.title}</div>

<select id="theElement"  type="color"
@change="${(this.changeHandler)}"
>
${this.options.map( opt => html`
    <option 
    class="opt" 
    value="${opt.value}"
    ?selected = "${(this.value=== opt.value)}"    
    > 
    ${opt.option}
    </option>
    `)}
</select>
</div>
`
  }
}
customElements.define('bilzaa-dropdown', BilzaaDropDown);