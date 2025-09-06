import React, { useEffect, useRef } from 'react';

const  TextEditor=() =>{
  const editorRef = useRef(null);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

   const CreateTable = () => {
    const rows = prompt('Rows?');
    const cols = prompt('Columns?');
    if (rows > 0 && cols > 0) {
      let table = '<table class="border border-gray-400 border-collapse w-full my-2">';
      for (let i = 0; i < rows; i++) {
        table += '<tr>';
        for (let j = 0; j < cols; j++) {
          table += '<td class="border border-gray-400 px-2 py-1 min-w-[80px]">&nbsp;</td>';
        }
        table += '</tr>';
      }
      table += '</table><br/>';
      execCommand('insertHTML', table);
    }
  };
  useEffect(()=>{
    CreateTable()
  },[])

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-3 flex flex-wrap gap-2">
        <button
          onClick={() => execCommand('bold')}
          className="px-3 py-1 rounded bg-blue-600 text-white"
        >
          Bold
        </button>
        <button
          onClick={() => execCommand('italic')}
          className="px-3 py-1 rounded bg-blue-600 text-white"
        >
          Italic
        </button>
        <input
          type="color"
          className="w-10 h-8 border-0"
          onChange={(e) => execCommand('foreColor', e.target.value)}
          title="Change Text Color"
        />
        <button
          onClick={createTable}
          className="px-3 py-1 rounded bg-blue-600 text-white"
        >
          Table
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="min-h-[250px] border border-gray-300 rounded p-3 focus:outline-none bg-white"
        role="textbox"
        tabIndex={0}
      />
    </div>
  );
}
export default TextEditor;
