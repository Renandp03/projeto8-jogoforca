export default function Letras(props){

    const {alfabeto} = props
    const {clickLetter} = props
    return(

        <div className="letters">
            {alfabeto.map((l)=><Letra button={l} clickLetter={clickLetter}/>)}
        </div>
    )
}


function Letra(props){
    return(
        <button className={`letter `} 
        onClick={props.clickLetter}>{props.button}
        </button> 
    )
}


 
 