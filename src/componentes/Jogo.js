import React from "react"

export default function Jogo(props){

  const {sortearPalavra,mascara,contador,vitoria,palavraChave} = props

    return(
       <div className="interface">
         <img src={`/img/forca${contador}.png`} alt="forca"/>
         <div>
          <div className="left">
          <button
           className="choose-word"
           onClick = {sortearPalavra} 
           data-teste="choose-word">Escolher Palavra</button>
          <p className={`word ${contador==6 ? "red":""} ${vitoria==true ? "green":""}`}
          data-teste="word"
          data-answer={palavraChave}>{mascara}</p>
         </div>
         </div>
       </div>
    )
}

