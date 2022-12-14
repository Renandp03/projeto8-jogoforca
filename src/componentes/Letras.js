export default function Letras(props){

    const {alfabeto,clickLetter,letrasClicadasAtualizadas} = props
   
    return(

        <div className="letters">
            {alfabeto.map((l)=><Letra button={l} clickLetter={(l)=>clickLetter(l)} letrasClicadasAtualizadas={letrasClicadasAtualizadas} />)}
        </div>
    )
}


function Letra(props){
    const {button,clickLetter,letrasClicadasAtualizadas} = props
    return(
        <button className={`letter ${letrasClicadasAtualizadas.includes(button) ? "desabilitado":""}`} 
        data-test="letter"
        onClick={()=> clickLetter(button)}>{button}
        </button> 
    )
}


 
 