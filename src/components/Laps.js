import React, {useState} from 'react';

function Laps(){
    const [lap, setLap] = useState(0);

     return(
         <div>
             <h2>Laps: {lap}</h2>
             <button onClick = {() => setLap(lap + 1)}>Lap</button>
             <button onClick = {() => setLap(0)}>Reset Laps</button>
         </div>
     )

}

export default Laps;