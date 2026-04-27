import styles from "./perfil.module.css"
import { useState } from "react"
import { FaUser } from "react-icons/fa";

function Perfil(){

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

    
  const handleEditar = async (e) => {
    e.preventDefault()
  
    if (!nome || !email) {
      alert("Preencha todos os campos");
      return;
    }
     
    const res = await fetch("http://localhost:5000/Usuario");
    const data = await res.json();

    const existe = data.find((u) => u.email === email);
      
    if (!existe) {
      const novoUser = { nome, email };

      await fetch("http://localhost:5000/Usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoUser)
      });

      setUser(novoUser);
    } else {
      setUser(existe);
    }

    setNome("")
    setEmail("")

   
  };



    return (
        <main className={styles.perfil}>
            <section className={styles.per}>
                <div><FaUser /></div>
            </section>
            <section className={styles.txt} >
                                <p>
                    {user && (
                        <div>
                            <p> {user.nome} </p>
                            <p> {user.email} </p>
                        </div>
                    ) }
                </p>
            </section> 
            <br /> <br />
            <section className={styles.foma}>
                <article>
                    <form onSubmit={handleEditar}>
                        <div>
                            <label htmlFor="">Nome</label> 
                            <input value={nome} type="text"  onChange={(e)=> setNome(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input value={email} type="email" onChange={(e)=> setEmail(e.target.value)}  />
                        </div>
                        <div>
                            <button type="submit" >Editar</button> 
                        </div>
                    </form> 
                </article>
            </section> <br /><br /><br /><br /> 
        </main> 

    )
}
export default Perfil