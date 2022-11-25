export default function Letras(props){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
     "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    

   


    return(

        <div className="letters">
            {alfabeto.map((l)=><Letra  button={l}/>)}
        </div>
    )
}


function Letra(props){

   
    return(
        <button className="letter desabilitado" onClick={""}>{props.button}</button> 
    )
}