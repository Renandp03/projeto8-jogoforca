export default function Chute(props){

    const {texto,setTexto,ganhou,palavraChave} = props
    function chutar(){
        if(texto == palavraChave){
            ganhou()
        }
        else{alert("Errou feio")}
        setTexto("")
    }

    return(
        <div className="chute">
            <p>Já sei a palavra</p>
        <input type="text" 
        data-test="guess-input"
        onChange={(e)=> setTexto(e.target.value)}
        value = {texto}/>
        <button className="letter"
        data-test="guess-button"
        onClick={chutar}>Chutar</button>
        </div>
    )
}