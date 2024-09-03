// import { useEffect, useRef, useState } from "react";
import { useState } from "react";
import Timecheck from "./components/timecheck";

function App() {
  const [status, setStatus] = useState([]);
  const [txt, setTxt] = useState("Demo Text");
  const [bg, setBg] = useState("#000000");
  const [txtColor, setTxtColor] = useState("#ffffff");

  const handleOnClick = () => {
    const obj = {
      txt,
      bg,
      txtColor,
      createdAt: Date.now(),
    };

    setStatus([...status, obj]);
    console.log(obj);
  };

  const onRemove = (createdAt) => {
    setStatus([...status.filter((data) => data.createdAt !== createdAt)]);
  };
  // return (
  //   <div className="container mx-auto">
  //     <div className="my-4 ml-4">
  //       <label>
  //         Card Text
  //         <input
  //           // value={txt}
  //           onChange={(e) => setTxt(e.target.value)}
  //           className="w-60 ml-2 p-1 border rounded-md mx-4"
  //           type="text"
  //           placeholder="Write something for your card..."
  //         />
  //       </label>
  //       <label>
  //         Bg Color
  //         <input
  //           value={bg}
  //           onChange={(e) => setBg(e.target.value)}
  //           className={`w-60 p-1 border rounded-md mx-4`}
  //           type="color"
  //           placeholder="Select Bg Color"
  //         />
  //       </label>
  //       <label>
  //         Txt Color
  //         <input
  //           value={txtColor}
  //           onChange={(e) => setTxtColor(e.target.value)}
  //           className={`w-60 ] p-1 border rounded-md mx-4`}
  //           type="color"
  //           placeholder="Select Text Color"
  //         />
  //       </label>
  //       <button
  //         onClick={handleOnClick}
  //         className="p-1 bg-slate-900 text-white px-3 rounded-md"
  //       >
  //         Create Card
  //       </button>
  //     </div>
  //     <div className="flex flex-wrap gap-2">
  //       {status.map((data) => (
  //         <Timecheck removeCard={onRemove} key={data.createdAt} data={data} />
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">Create Your Custom Status Card</h1>
      <hr className="mb-6 border-t-2 border-gray-300 mx-auto w-3/4" />
<p className="text-center font-medium mb-6 text-gray-500">Customize your status card with personalized text and colors. Use the options below to get started!</p>
<hr className="mb-6 border-t-2 border-gray-300 mx-auto w-3/4" />

      <div className="my-4 ml-4 ">
        <label>
          Card Text
          <input
            onChange={(e) => setTxt(e.target.value)}
            className="w-60 ml-2 p-1 border rounded-md mx-4"
            type="text"
            placeholder="Write something for your card..."
          />
        </label>
        <label>
          Background Color
          <input
            value={bg}
            onChange={(e) => setBg(e.target.value)}
            className={`w-60 p-1 border rounded-md mx-4`}
            type="color"
          />
        </label>
        <label>
          Text Color
          <input
            value={txtColor}
            onChange={(e) => setTxtColor(e.target.value)}
            className={`w-60 p-1 border rounded-md mx-4`}
            type="color"
          />
        </label>
        <button
          onClick={handleOnClick}
          className="p-1 bg-slate-900 text-white px-3 rounded-md"
        >
          Create Card
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {status.map((data) => (
          <Timecheck removeCard={onRemove} key={data.createdAt} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;

