import {LitElement, html, customElement, property,css} from 'lit-element'

class BilzaaShowAlone extends LitElement {
static get properties(){
    return {
      idToKeep: {type: String}
    }
}    

// static get styles() {
//     return css`
// .btnOff {background-color: rgb(248, 239, 238);box-shadow:1px 1px rgb(243, 231, 231);border-color:rgb(243, 231, 231)}
// .btnOn {background-color: rgb(17, 245, 169);}

// .divOn {background-color: rgb(220, 247, 238);}
// .divOff {background-color: rgb(247, 238, 237);}
// #outerDiv {
// border:2px solid silver;
// width:100%;
// padding:0px;
// max-width:300px;
// }  
// #topDiv {
// padding:3px;

// display:flex;
// }  

// #flagDiv{
// padding:4px;
// margin-left:3px;
// box-shadow:1px 1px rgb(6, 218, 147);
// }  
// #titleDiv{
// font-weight: bold;
// padding:4px;
// margin:auto;
// text-align: center;
// font-family: Roboto,Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
// }
// `;
//   }

constructor(){
super();
this.addEventListener("showAlone",this.listen);
}
listen=(e)=>{
console.log('listening e.detail :',e.detail);
}
clickHandler(e) {
let event = new CustomEvent('showAlone', {
    detail: {
      property: "property",
      boxtype : "boxtype"
    }
  });
this.dispatchEvent(event);
console.log('e', event);  
//..............................wrapper  
// let event = new Event('showAlone',{
// 	detail: {
// 		username: "davidwalsh"
// 	}
// });
// this.dispatchEvent(event);
// console.log('event :', event);
}

render() {
//we can also use @change      

    return html`

<span
@click="${(this.clickHandler)}" >
<slot></slot>
  </span>      
  
`
  }
}
customElements.define('bilzaa-showalone', BilzaaShowAlone);