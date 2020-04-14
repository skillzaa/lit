import {LitElement, html, customElement, property,css} from 'lit-element'

//@customElement('bilzaa-toggle')
class BilzaaToggle extends LitElement {
static get properties(){
    return {
      flag: {type: Boolean},
      title: {type: String},
      property: {type: String},
      boxtype: {type: String}
    }
}    

static get styles() {
    return css`
.btnOff {background-color: rgb(248, 239, 238);box-shadow:1px 1px rgb(243, 231, 231);border-color:rgb(243, 231, 231)}
.btnOn {background-color: rgb(17, 245, 169);}

.divOn {background-color: rgb(220, 247, 238);}
.divOff {background-color: rgb(247, 238, 237);}
#outerDiv {
border:2px solid silver;
width:100%;
padding:0px;
max-width:300px;
}  
#topDiv {
padding:3px;

display:flex;
}  

#flagDiv{
padding:4px;
margin-left:3px;
box-shadow:1px 1px rgb(6, 218, 147);
}  
#titleDiv{
font-weight: bold;
padding:4px;
margin:auto;
text-align: center;
font-family: Roboto,Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
`;
  }

constructor(){
super();
/**if we dont send any flag attribute then it will be false, to send inital vlaue as true send flag="true" */
this.flag=false;
// this.title="Toggle";
// this.description = "Show / Hide";
// this.property="";
// this.boxtype="";
}


clickHandler() {
this.flag = (this.flag === true) ? false : true;  
let event = new CustomEvent('bilzaa-toggle', {
    detail: {
      property: this.property,
      boxtype : this.boxtype,
      flag:  this.flag
    }
  });
this.dispatchEvent(event);
//console.log('Flag :', event.detail.flag);
}
  render() {
//we can also use @change      

    return html`

<div class="${(this.flag===true)? " divOn" : " divOff"}" id="outerDiv">
<div id="topDiv">
<button 
class="${(this.flag===true? " btnOn":" btnOff")}"
id="flagDiv"  
@click="${(this.clickHandler)}" >
${(this.flag===true)? "ON":"OFF"}
</button>
<div id="titleDiv">${this.title}</div>    
</div>
</div>      
  
`
  }
}
customElements.define('bilzaa-toggle', BilzaaToggle);