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
 const [letrasClicadas,setLetrasClicadas] = React.useState([...alfabeto])
 const [contador,setContador] = React.useState(0)
 let letrasClicadasAtualizadas = [...letrasClicadas]
 let novaMascara = ""


 function sortearPalavra(){
    setContador(0)
    letrasClicadasAtualizadas = []
   let i = Math.floor(Math.random()*palavras.length)
   let palavraSorteada = palavras[i]
   
  
   setPalavraChave(palavraSorteada)
   console.log(palavraSorteada)
   for(i=0;i<palavraSorteada.length;i++){
     novaMascara+="_"
   }
   setMascara(novaMascara)
   setLetrasClicadas(letrasClicadasAtualizadas)
 }




function clickLetter(letter){
  if(!letrasClicadas.includes(letter)){
  novaMascara = ""
  let i = 0
  for(i=0;i<palavraChave.length;i++){
    
    if(palavraChave[i]===letter || mascara[i]!="_"){
      novaMascara += palavraChave[i]
    }else{novaMascara+="_"}
    
  }
   console.log(letter)

  let novoContador = contador

   if(mascara === novaMascara){
    novoContador++
    setContador(novoContador)
   }

   if(novoContador == 6){
    perdeu()
   }
   else{

  setMascara(novaMascara)
  
  letrasClicadasAtualizadas = [...letrasClicadas,letter]
  setLetrasClicadas([...letrasClicadasAtualizadas])
  console.log(letrasClicadasAtualizadas)}}
}


function perdeu(){
  alert("perdeu mané")
  letrasClicadasAtualizadas = [...alfabeto]
  setLetrasClicadas(letrasClicadasAtualizadas)
  
}
  
  
  

  return(
    <div>
    <Jogo sortearPalavra={sortearPalavra} 
    mascara={mascara} 
    contador={contador}/>

    <Letras alfabeto={alfabeto} 
    clickLetter={(l)=>clickLetter(l)}
     letrasClicadasAtualizadas={letrasClicadasAtualizadas} 
     contador={contador}/>
    </div>
  )
}







export default App;
