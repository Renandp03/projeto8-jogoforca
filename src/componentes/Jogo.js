import React from "react"

export default function Jogo(){

  const [palavraChave,setPalavraChave] = React.useState([])
  const [mascara,setMascara] = React.useState([])
  let selecionados = []

  function sortearPalavra(){
    let i = Math.floor(Math.random()*palavras.length)
    let palavraSorteada = palavras[i]
    setPalavraChave(palavraSorteada.split(''))
    console.log(palavraSorteada)
    for(i=0;i<palavraChave.length;i++){
      if(selecionados.includes(palavraChave[i])){setMascara([...mascara,[palavraChave[i]]])}
      else{setMascara([...mascara,"_"])}
    }

    
  }


    return(
       <div className="interface">
         <img src="/img/forca0.png" alt="forca"/>
         <div>
          <div className="left">
          <button
           className="choose-word"
           onClick = {sortearPalavra} 
           data-teste="choose-word">Escolher Palavra</button>
          <p className="word" 
          data-teste="word">{mascara}</p>
         </div>
         </div>
       </div>
    )
}






const palavras = [
  "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abrigo", "abrir",
  "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco",
  "caixa", "chantilly", "cachorro", "cuidado", "caneta", "carinho", "cabra", "cesto",
  "dados", "dizer", "danone", "dente", "diamante", "diafragma", "detonar", "dia",
  "elefante", "esmeralda", "esfinge", "esfera", "encontro", "ema", "escola", "economia",
  "formiga", "fama", "festa", "fiador", "ferver", "flauta", "figo", "fiapo", "fotografia",
  "goiaba", "gelo", "grito", "guria", "goleiro", "golfinho", "golfe", "girar",
  "harmonia", "haste", "hectare", "hepatite", "hiena", "hidrante",
  "igreja", "importante", "idoso", "irado", "identidade", "idioma", "idade", "idiota",
  "jantar", "jumento", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco",
  "laranja", "lua", "luz", "lindo", "lacraia", "lactose", "lacrar",
  "manga", "morango", "mico", "matar", "mingau", "moqueca", "mocassin",
  "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nabo",
  "ovo", "ostra", "obstetra", "orangotango", "olhar", "ortodoxo", "ouro", "ornamento",
  "pato", "polvo", "povoar", "pano", "princesa", "pizza", "patroa",
  "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar",
  "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura",
  "salada", "salamandra", "sacola", "siri", "sabre", "sucarose", "sabedoria", "sacerdote",
  "tatu", "tabacaria", "taberneiro", "torrada", "tamanho", "tatuagem", "trem",
  "uva", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir",
  "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa",
  "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale",
  "zebra", "zagueiro", "zero", "zoeira", "zepelim", "zinco", "zumbido"
]

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
