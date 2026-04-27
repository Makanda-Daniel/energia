
function Fi () {
     

    
 const  clica = () => {
     console.log("prop clica recebido:")
   }

    return (
        <div>
            <h1>ola, eu sou o filho </h1>
            <p>
                <p>
                    <button onClick={clica} >clicar em mim</button>
                </p>
            </p>
        </div>
        
    )
}
export default Fi