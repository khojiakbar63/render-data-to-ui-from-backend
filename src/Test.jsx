import React, { useEffect, useState } from 'react';



const Test = () => {
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Test;


// ===== OLDER VERSION =====>

// const Test = () => {

//     const [num, setNum] = useState(0)
//     const [str, setStr] = useState('')



//     useEffect(()=>{
//         console.log( `on${num} update`)
//     }, [num])

//     return (
//         <div>
//             {/* <p>-----input-----</p>
//             <p>{str}</p>
//             <input onChange={(e)=>setStr(e.target.value)} type="text" placeholder='Enter string..'/>
//             <p>-----input-----</p> */}


//             <p>----Counter---</p>
//             <h1>{num}</h1>
//            <button onClick={()=>setNum(num+1)}>click</button>
//            <p>----Counter---</p>

//         </div>
//     );
// };

// export default Test;