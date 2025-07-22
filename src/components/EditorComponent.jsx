import Editor from '@monaco-editor/react';

function EditorComponent(props){
    const {code,setCode} = props;
    console.log(code);
    
    return (
        <div className='editorComponentDiv'>
            <Editor 
                height="100%"
                defaultLanguage="xml"
                theme="vs-dark"
                value={code}
                onChange={(value)=>setCode(value)}
            />
        </div>
    )
}

export default EditorComponent;