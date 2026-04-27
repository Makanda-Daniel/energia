import projeta from "../Img/projeta.png"
import styles from "./forma.module.css"
import Nav from "../Header/Nav"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Layout from "../Layout/Layout"
function Tela () {

    const [name, setName] = useState ("")
    const [digitado, setDigitado] = useState("")
    const navigate = useNavigate()


    function handlesubmit (e) {
        e.preventDefault()
    }

    function entrar () {
        if(name==="") {
            alert("Por favor, preencha o campo com o seu nome")
        } else {
            setDigitado(name)
             navigate("/Layout", {state: { usuario: name }})
        }
    }
           
    return (
        <div className={styles.p}>
            <main>
                <div>
                    <img src={projeta} alt=""  />
                </div> 
                <p>
                    digite o seu nome
                </p>
                    <form  onSubmit={handlesubmit}>
                        <div>
                            <input value={name} type="text" onChange={(e)=> setName(e.target.value)} />   
                        </div>
                        <div>
                            <button onClick={entrar}>Entrar</button> 
                        </div>
                    </form>
            </main>
        </div>
    )
}

export default Tela