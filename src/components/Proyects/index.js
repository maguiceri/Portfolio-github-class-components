import React from 'react';
import Proyect from '../Proyect';
import "./styles.scss"

class Proyects extends React.Component {
    render() {
      
        return(

           <div className="proyects">
               <p >Projects</p>
               <ul>
               {this.props.repos.map((repo, key) => {
                   return (
                       <Proyect key={key} id={key} repo={repo} /> //id={key} es para poder pasarlo
                   )

               })}
               </ul> 
           </div>
        )
    }
}

export default Proyects;