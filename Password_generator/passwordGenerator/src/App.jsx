import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    
  }


  useEffect(()=>{
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className='container'>
  <h1 className='title'>Password Generator</h1>
  <div className='shadow rounded-lg overflow-hidden mb-4'>
    <input 
      type="text"
      value={password}
      className='password-input'
      placeholder='Password'
      readOnly
      ref={passwordRef}
    />
    <button
      onClick={copyPasswordToClipboard}
      className='copy-button'
    >
      copy
    </button>
  </div>
  <div className='password-options'>
    <div className='checkbox-container'>
      <input 
        type="range" 
        min={6}
        max={30}
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <label htmlFor="length">Length: {length}</label>
    </div>
    <div className='checkbox-container'>
      <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }}
      />
      <label htmlFor="number">Numbers</label>
    </div>
    <div className='checkbox-container'>
      <input 
        type="checkbox"
        defaultChecked={charAllowed}
        onChange={() => {
          setCharAllowed((prev) => !prev)
        }}
      />
      <label htmlFor="charInput">Character</label>
    </div>
  </div>
</div>
)
}

export default App