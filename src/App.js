import React from 'react';
import Jogo from './componentes/Jogo';
import Letras from './componentes/Letras';
import palavras from "./palavras"


function App(){
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h",
 "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
 "t", "u", "v", "w", "x", "y", "z"]
 

 const [palavraChave,setPalavraChave] = React.useState("")
 const [mascara,setMascara] = React.useState("")
 const [letrasClicadas,setLetrasClicadas] = React.useState([])

 function sortearPalavra(){
   let i = Math.floor(Math.random()*palavras.length)
   let palavraSorteada = palavras[i]
   let palavraSorteadaArray = palavraSorteada.split("")
   let novaMascara = ""
   setPalavraChave(palavraSorteada)
   console.log(palavraSorteada)
   for(i=0;i<palavraSorteada.length;i++){
     novaMascara+="_"
   }
   setMascara(novaMascara)
   alert(novaMascara)
   
 }




function clickLetter(letter){
  let novaMascara = mascara
  let i = 0
  for(i=0;i<palavraChave.length;i++){
    if(palavraChave[i]===letter){
      novaMascara.replace(novaMascara[i],palavraChave[i])
    }
    console.log(letter)
  }
  setLetrasClicadas([...letrasClicadas, letter])
}


  
  
  

  return(
    <div>
  <Jogo sortearPalavra={sortearPalavra} mascara={mascara} />
    <Letras alfabeto={alfabeto} clickLetter={clickLetter}/>
    </div>
  )
}







export default App;
