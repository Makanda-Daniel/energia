import styles from "./recalculo.module.css"

import { useEffect, useState } from "react"
function Recalculo () {

    const [cap, setCap] = useState([])

    useEffect(  ()=>{

         fetch("http://localhost:5000/Projeto", {

            method:"GET", 
            headers:{
                "Content-Type":"application/json"
            }

        })
        .then((cap)=> cap.json())
        .then((data)=>(
            setCap(data)
        ))

    }, [] )


    return( <div>

        <div>
          
            <div className={styles.card}>
               <h3>Resultado Do Consumo</h3>
               <h4>calcule e atualize</h4>
               <p > {
                

                cap.map((item)=> (

                    <p>
                       
                    <div key={item.id}>
                        
                     <span>consumo total</span>   { Number( item.numero ) * 8} <span>Kz</span>

                    </div>

                    </p>

                ))

               
                                
                                
                 } </p>

            </div>
        </div>
        



       
    </div> )
}

export default Recalculo