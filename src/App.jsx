
import './App.css'
import Output from './components/Output'
import EditorComponent from './components/EditorComponent'
import { useState } from 'react'
import { VscDebugStart } from "react-icons/vsc";


function App() {
  const [code,setCode] = useState(
`<html>
  <head>
    <title>Varma CodeEditor</title>
  </head>
  <body>
    // write your code
    <h1>hello</h1>
  </body>
</html>`)

  const [output,setOutput] = useState('')

  function handelRun(){
    setOutput(()=>code)
  }
  
  return (
    <div>
      <div className='editorDiv'>
        <div className="navbar">
          <div className="logo">VARMA CODE-EDITOR</div>
          <div className="runBtn" onClick={handelRun}>run <VscDebugStart /></div>
        </div>
        <EditorComponent 
          code = {code}
          setCode = {setCode}

        />
      </div>
      <div className='outputDiv'>
        <Output 
          output={output}
          setOutput={setOutput}
        />
      </div>
    </div>
  )
}

export default App;
