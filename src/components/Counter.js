import { useEffect, useState } from "react"
import './Counter.css'
export default function Counter(props) {
       const [count, setcount] = useState(0);
       useEffect(()=>{
              console.log("counter props, state", props,count);
              return ()=>{
                     console.log("counter deleted props, state", props, count);
              }
       }, []);
       return (

              <div className="ctr">

                     <div className="button">
                            <div className="del">
                                   <button className="delete" onClick={()=>props.deletecounter(props.idx)}>Delete [{props.idx}] </button>
                            </div>
                            <div className="ele">
                                   <div >
                                          <button className="increment" onClick={() => setcount(count + 1)} id="add">+</button>
                                   </div>
                                   <div className="counterdisplay">{count}</div>
                                   <div >
                                          <button className="decrement" onClick={() => setcount(count - 1)} id="sub">-</button>
                                   </div>
                            </div>
                            <div className="res">
                                   <button className="reset" onClick={()=> setcount(0)}>Reset</button>
                            </div>
                     </div>

              </div>

       )
}