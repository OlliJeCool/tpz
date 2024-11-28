import React from 'react'

interface popupPropData {
    setDisplayTimer: (a: boolean) => void;
}

const Popup = ({setDisplayTimer} : popupPropData) => {
  return (
    <div className="w-[20%] h-[20%] bg-slate-100 rounded-2xl flex items-center flex-col p-4 shadow-2xl shadow-rose-100">
    <h1 className="text-2xl font-bold py-2">
      {'Hola <3'}
    </h1>
    <p className="text-center py-4">
      Tohle je trochu netradiční způsob TPZky, ale doufám, že se ti bude líbit.
    </p>
    <button onClick={() => setDisplayTimer(true)} className="bg-blue-300 py-2 w-1/3 rounded-lg hover:bg-blue-400 transition-all duration-1000 hover:scale-105">Klik :o</button>
    </div>
  )
}

export default Popup