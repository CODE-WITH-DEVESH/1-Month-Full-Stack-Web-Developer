import { useCallback, useState, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [
    length, numberAllowed, charAllowed, setCharAllowed,setPassword
  ])

  const copypassword =useCallback(() => {
    window.navigator.clipboard.writeText(password)
  },
[password])



  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
       <div className="w-full max-w-lg mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Password Generator
      </h1>
      <div className="flex shadow-md rounded-lg overflow-hidden mb-5">
        <input
          type="text"
          value={password}
          className="flex-grow py-2 px-4 text-lg text-gray-800 bg-gray-100 border-none outline-none"
          placeholder="Generated Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copypassword}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-all duration-200"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="cursor-pointer font-medium">
            Include Numbers
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charactersInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charactersInput" className="cursor-pointer font-medium">
            Include Symbols
          </label>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="lengthRange" className="font-medium">
            Length: {length}
          </label>
          <input
            id="lengthRange"
            type="range"
            min={6}
            max={100}
            value={length}
            className="w-full accent-blue-500"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
      </div>
    </div>

    </>
  )
}

export default App
