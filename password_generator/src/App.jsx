import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+-/*";
    for (let i = 0; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <div className="min-h-screen bg-[#1f1f1f] flex flex-col items-center justify-center text-white font-sans p-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-100">
        Password Generator
      </h1>

      <div className="w-full max-w-md bg-[#2b2b2b] p-5 rounded-2xl shadow-lg flex items-center gap-3">
        <input
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
          className="flex-grow bg-[#3a3a3a] text-gray-100 px-4 py-2 rounded-lg outline-none border border-gray-700 placeholder-gray-500"
        />
        <button 
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-lg transition-colors"
        onClick={copyPasswordToClipBoard}>
          copy
        </button>
      </div>

      <div className="w-full max-w-md mt-6 bg-[#2b2b2b] p-5 rounded-2xl shadow-md space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="rangeInput" className="text-sm text-gray-300">
            Length : {length}
          </label>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer accent-blue-500"
            onChange={(e) => setLength(e.target.value)}
            id="rangeInput"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              value={numberAllowed}
              id="numberInput"
              onChange={(e) => setNumberAllowed((prev) => !prev)}
              className="accent-blue-500 w-4 h-4 cursor-pointer"
            />
            <label htmlFor="numberInput" className="text-gray-300">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              value={charAllowed}
              id="charInput"
              onChange={(e) => setCharAllowed((prev) => !prev)}
              className="accent-blue-500 w-4 h-4 cursor-pointer"
            />
            <label htmlFor="charInput" className="text-gray-300">
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
