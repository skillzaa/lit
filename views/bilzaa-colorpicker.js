import {LitElement, html, customElement, property,css} from 'lit-element'

@customElement('bilzaa-colorpicker')
class BilzaaColorPicker extends LitElement {
static get properties(){
    return {
      title : {type:String},  
      property: {type: String},
      boxtype: {type: String}
    }
}    


constructor(){
super();
this.title="Your Title Here..";
this.boxtype="element";
this.property = "borderColor";
}


clickHandler(e) {
let event = new CustomEvent('bilzaa-colorpicker', {
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
<style>
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
</style>    

<div id="outerDiv">
<div id="topDiv">${this.title}</div>
<input id="theElement"  type="color"
@change="${(this.clickHandler)}"
>
</div>
`
  }
}