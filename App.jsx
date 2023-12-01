import React ,{useState}  from "react";
import './App.css'

function App() {
  const [Horizontal, setHorizontal] = useState(10)
  const [Vertically, setVertically] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [Color, setColor] = useState("black")
  const [CheckOn, setCheckOn] = useState(false)


  return (
    <>
      <div className="App">
        <div className="controls">
          <label>Horizontal Length</label>
          <input type="range" min="-200" max="200" value={Horizontal} onChange={(e)=>setHorizontal(e.target.value)} />
        
          <label>Vertical Length</label>
          <input type="range" min="-200" max="200" value={Vertically} onChange={(e)=>setVertically(e.target.value)} />
        
          <label>Blur</label>
          <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
        
          <label>Color</label>
          <input type="color" value={Color} onChange={(e)=>setColor(e.target.value)} />
        
          <div className="switch">
            <label>
              Outline
              <input type="checkbox" checked={CheckOn} onChange={()=>setCheckOn(!CheckOn)}/>
              <span className="lever"></span>
              Inset
            </label>
          </div>
        
        
        </div>

        <div className="output"></div>
          <div className="box" style={{boxShadow:` ${CheckOn ? "inset":""}  ${Horizontal}px ${Vertically}px ${Blur}px ${Color}`}}>
            <p>box-shadow:{Horizontal}px {Vertically}px {Blur}px {Color}</p>

          </div>

      </div>
    </>
  );
}

export default App;
