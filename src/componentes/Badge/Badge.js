import React from "react";
import "./Badge.scss";
/* import ReactDOM from "react-dom";
import { directive } from "@babel/types"; */

class Badge extends React.Component {
  /* nuevo() {
      const element= (
        <div style={{marginTop:'20px', background:'red', borderRadius:'5em', color:'white', padding:'10px 15px', width:'150px', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div>¡Da click aqui!</div>
        </div>
      )
      const container= document.getElementById('here');
      ReactDOM.render(element, container);
  }
  alerta = () =>{
    alert('¡Eres un genio!');
  } */
  render() {
    return (
     <div className="Badge">
       <div className="Badge_header">
         Esta es la cabecera.
       </div>
       <div className="Badge_body">
         Este es el cuerpo.
       </div>
       <div className="Badge_footer">
         este es el pie de pagina
       </div>
     </div>
    );
  }
}
export default Badge;
