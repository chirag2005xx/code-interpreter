import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import '../App.css';

function CodeEditorPage({ username }) {
  const [input, setInput] = useState('x=5\ny=5\nx+y');
  const [output, setOutput] = useState([{ type: 'info', message: `Welcome ${username}, ready to run Python code...` }]);
  const [pyodideInstance, setPyodideInstance] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [lineCount, setLineCount] = useState(3);
  const [charCount, setCharCount] = useState(11);

  useEffect(() => {
    const loadPyodideAndPackages = async () => {
      try {
        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/',
        });
        await pyodide.loadPackage(['numpy', 'pandas', 'matplotlib']);
        setPyodideInstance(pyodide);
      } catch (error) {
        setOutput([{ type: 'stderr', message: `Pyodide loading error: ${error.message}` }]);
      }
    };

    loadPyodideAndPackages();
  }, []);

  useEffect(() => {
    const lines = input.split('\n').length;
    setLineCount(lines);
    setCharCount(input.length);
  }, [input]);

  const handleRun = async () => {
    if (!pyodideInstance) {
      setOutput([...output, { type: 'stderr', message: 'Pyodide is still loading, please wait...' }]);
      return;
    }
  
    try {
      setOutput([{ type: 'info', message: 'Running your Python code...' }]);
      
      // Capture stdout
      let stdoutCapture = [];
      pyodideInstance.globals.set("print_capture", (text) => {
        stdoutCapture.push(text);
      });
      
      // Redirect Python's print to our capture function
      await pyodideInstance.runPythonAsync(`
        import sys
        
        class StdoutCatcher:
            def write(self, text):
                print_capture(text)
            def flush(self):
                pass
        
        sys.stdout = StdoutCatcher()
      `);
      
      // Run the user's code
      const result = await pyodideInstance.runPythonAsync(input);
      
      // Display both stdout and return value
      const resultStr = result !== undefined ? String(result) : '';
      setOutput(prev => [
        ...prev, 
        ...stdoutCapture.map(text => ({ type: 'stdout', message: text.trim() })),
        ...(resultStr ? [{ type: 'stdout', message: resultStr }] : [])
      ]);
    } catch (error) {
      const errMsg = error.message || "Unknown Error";
  
      let suggestion = "";
      if (errMsg.includes("NameError")) {
        suggestion = "🔍 Tip: Did you forget to define a variable or misspell it?";
      } else if (errMsg.includes("SyntaxError")) {
        suggestion = "🧠 Tip: Check your syntax – maybe a missing colon, bracket, or indentation?";
      } else if (errMsg.includes("TypeError")) {
        suggestion = "🔧 Tip: You might be using the wrong data type for an operation.";
      } else if (errMsg.includes("IndexError")) {
        suggestion = "📏 Tip: Looks like you're trying to access an index that doesn't exist.";
      } else if (errMsg.includes("ImportError")) {
        suggestion = "📦 Tip: Did you forget to import a required package?";
      } else if (errMsg.includes("IndentationError")) {
        suggestion = "⎵ Tip: Python is picky about indentation! Make sure everything lines up properly.";
      }
  
      setOutput(prev => [
        ...prev,
        { type: 'stderr', message: errMsg },
        ...(suggestion ? [{ type: 'warning', message: suggestion }] : [])
      ]);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">Welcome, {username} 👋</h1>
      </header>

      <main className="workspace">
        <div className="editor-panel">
          <div className="editor-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="editor-tab">
              <span className="editor-tab-icon python"></span>
              <span>main.py</span>
            </div>
            <button onClick={handleRun} className="button button-success run-button-top">
              ▶ Run
            </button>
          </div>
          <div className="editor-container">
            <Editor
              height="100%"
              language="python"
              theme={darkMode ? "vs-dark" : "vs-light"}
              value={input}
              onChange={(value) => setInput(value || '')}
              options={{
                automaticLayout: true,
                suggestOnTriggerCharacters: true,
                snippetSuggestions: 'top',
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: 'JetBrains Mono, monospace',
                quickSuggestions: { other: true, comments: false, strings: true },
              }}
            />
          </div>
        </div>

        <div className="panel-resizer" id="panel-resizer"></div>

        <div className="output-panel">
          <div className="output-header">
            <div className="output-tab">Console Output</div>
          </div>
          <div className="console-output">
            {output.map((line, index) => (
              <div
                key={index}
                className={`console-line ${
                  line.type === 'stderr' ? 'error' :
                  line.type === 'warning' ? 'warning' :
                  line.type === 'success' ? 'success' : ''
                }`}
              >
                {line.message}
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-stats">
          <span>{lineCount} lines</span> | <span>{charCount} characters</span>
        </div>
        <button onClick={toggleDarkMode} className="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          Toggle Dark Mode
        </button>
      </footer>
    </div>
  );
}

export default CodeEditorPage;
