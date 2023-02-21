import React from 'react';

function App() {
  const savefile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementId("input").value],{
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "note.txt";
    document.body.appendChild(element);
    element.click();
  }
  return (
    <div className="bg-amber-500 w-screen h-screen grid grid-cols-1 place-items-center">
    <div className=" bg-amber-700 w-80 h-32 max-sm:h-20 max-sm:w-80 rounded-3xl drop-shadow-xl
    grid grid-cols-1 place-items-center">
      <h1 className="text-4xl font-semibold text-left py-3 text-white">Note</h1>
      <textarea type="text" id="input" className="flex h-52 w-80 max-sm:h-80 bg-amber-200 outline-none text-left py-5 px-5
      rounded-br-3xl rounded-bl-3xl"/>
    </div>
    <div className="max-sm:pb-32 pb-30">
    <button className="bg-amber-800 hover:bg-amber-900 w-28 h-10 rounded-2xl font-semibold text-lg text-white"
    primary onClick={savefile}>Save</button>
    </div>
    </div>
  );
}

export default App;
