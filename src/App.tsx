import { Widget } from "./components/Widget";

export function App() {
  return <Widget/>
}




// import { useState } from 'react'

// interface ButtonProps { // propriedades do botão, espero receber texto, que é uma strig
//   text?: string; //caso não tenha text o botão usa o ?
// }

// function Button(props: ButtonProps) { //falar o formato desses parametros, recebendo parametros 
//   return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
// }

// function App() {
//   return (
//     <div className="flex gap-2">
//       <Button text = "Enviar" />
//       <Button text = "Ok" />
//       <Button />
//     </div>
//   )
// }

// export default App
