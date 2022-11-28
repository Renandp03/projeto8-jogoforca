import React from 'react';
import Jogo from './componentes/Jogo';
import Letras from './componentes/Letras';
import Chute from './componentes/Chute';
import palavras from "./palavras"


function App(){
const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H",
 "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
 "T", "U", "V", "W", "X", "Y", "Z"]
 

 const [palavraChave,setPalavraChave] = React.useState("")
 const [mascara,setMascara] = React.useState("")
 const [letrasClicadas,setLetrasClicadas] = React.useState([...alfabeto])
 const [contador,setContador] = React.useState(0)
 const [texto,setTexto] = React.useState("")
 const [vitoria,setVitoria] = React.useState(false)
 let letrasClicadasAtualizadas = [...letrasClicadas]
 let novaMascara = ""


 function sortearPalavra(){
  if(!mascara.includes("_")){
    setVitoria(false)
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
 }}




function clickLetter(letter){
  let minLetter = letter.toLowerCase()
  if(!letrasClicadas.includes(letter)){
  novaMascara = ""
  let i = 0
  for(i=0;i<palavraChave.length;i++){
    
    if(palavraChave[i]===minLetter || mascara[i]!="_"){
      novaMascara += palavraChave[i]
    }else{novaMascara+="_"}
    
  }
   console.log(minLetter)

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
  if(novaMascara===palavraChave){ganhou()}
}


function perdeu(){
  letrasClicadasAtualizadas = [...alfabeto]
  setLetrasClicadas(letrasClicadasAtualizadas)
  setMascara(palavraChave)
  
}
  
function ganhou(){
  letrasClicadasAtualizadas = [...alfabeto]
  setLetrasClicadas(letrasClicadasAtualizadas)
  setVitoria(true)
  setMascara(palavraChave)
}
  
  

  return(
    <div>
    <Jogo sortearPalavra={sortearPalavra} 
    mascara={mascara}
    palavraChave={palavraChave} 
    contador={contador}
    vitoria={vitoria}/>

    <Letras alfabeto={alfabeto} 
    clickLetter={(l)=>clickLetter(l)}
     letrasClicadasAtualizadas={letrasClicadasAtualizadas} 
     contador={contador}/>

     <Chute 
     texto={texto}
      setTexto={setTexto}
      ganhou={ganhou}
      palavraChave={palavraChave}/>
    </div>
  )
}







export default App;
