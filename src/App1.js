import {  useState } from 'react';
import './App1.css';
import Counter from './components/Counter'
function App1() {
  const [arr, setarr] = useState([]);
  const [index,setIndex]=useState(0);
  function Delete(idx){
    let dum=[];
    for(let i=0;i<arr.length;i++){
      if(i!==idx){
        dum.push(i)
      }
    }
    setarr(dum);
  }

  function addcounter() {
    let dumarr=[...arr,index];
    setIndex(index+1);
    setarr(dumarr);
    
  }


  return (
    <>
      <div className='addlogo'>
        <button className='plussign' onClick={addcounter}>+</button>
      </div>
      <div className='outerflex'>
        {arr.map((el)=>{
          return <Counter idx={el} deletecounter={Delete} key={el}></Counter>;
        })}
      </div>
    </>
  )
}

export default App1;
