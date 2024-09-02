import React, { useState } from 'react';
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import { vscode } from './vscode';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [needCodeBase, setNeedCodeBase] = useState('no');
  const [needAIAssistant, setNeedAIAssistant] = useState('no');
  const [isRunning, setIsRunning] = useState(false);

  function handleHowdyClick() {
    setIsRunning(true);
    vscode.postMessage({
      command: "ready",
      text: "Hey there partner! 🤠",
      input1: input1,
      input2: input2,
      input3: input3,
      needCodeBase: needCodeBase,
      needAIAssistant: needAIAssistant
    });
  }

  function toggleNeedCodeBase() {
    setNeedCodeBase(prevState => prevState === 'yes' ? 'no' : 'yes');
  }

  function toggleNeedAIAssistant() {
    setNeedAIAssistant(prevState => prevState === 'yes' ? 'no' : 'yes');
  }

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.header}>Code Genie</h1>
        
        <label htmlFor="input1" style={styles.label}>Code base Path:</label>
        <input 
          type="text" 
          id="input1" 
          style={styles.input}
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />

        <label htmlFor="input2" style={styles.label}>Project (Flavor):</label>
        <input 
          type="text" 
          id="input2" 
          style={styles.input}
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />

        <label htmlFor="input3" style={styles.label}>Module:</label>
        <input 
          type="text" 
          id="input3" 
          style={styles.input}
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />

        <div style={styles.checkboxContainer}>
          <div style={styles.checkbox}>
            <input 
              type="checkbox" 
              id="needCodeBase" 
              name="needCodeBase" 
              checked={needCodeBase === 'yes'}
              onChange={toggleNeedCodeBase}
            />
            <label htmlFor="needCodeBase" style={styles.checkboxLabel}>Need Code Base: {needCodeBase}</label>
          </div>
          
          <div style={styles.checkbox}>
            <input 
              type="checkbox" 
              id="needAIAssistant" 
              name="needAIAssistant" 
              checked={needAIAssistant === 'yes'}
              onChange={toggleNeedAIAssistant}
            />
            <label htmlFor="needAIAssistant" style={styles.checkboxLabel}>Is Need AI Assistant: {needAIAssistant}</label>
          </div>
        </div>

        <VSCodeButton style={styles.button} onClick={handleHowdyClick}>Run Code Genie</VSCodeButton>

        {isRunning && <p style={styles.runningMessage}>Code Genie is Stated Successfully </p>}
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '350px',
    color: '#333',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
    fontSize: '22px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#555',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  checkboxContainer: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  checkbox: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: '8px',
    fontSize: '14px',
    color: '#333',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007ACC',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
  },
  runningMessage: {
    marginTop: '10px',
    color: '#007ACC',
    fontSize: '14px',
  },
};

export default App;
