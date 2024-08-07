import React, { useEffect, useState } from "react";
import CardWrapper from "./card-wrapper";
import Card from "./card";


const App = () => {
  const [photos, setPhotos] = useState([]);
  const [load, setLoad] = useState(false);
  const baseURL = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    fetch(`${baseURL}/photos`).then((res) => {
      res.json().then((data) => {
        setPhotos(data)
        setLoad(true)
      });
    });
  }, []);

  return (
    <div className="container">

      {
        load ? 
        <CardWrapper>

        {
        photos.length ?
        photos?.map((item) => {
          return <Card key={item.id} state={item}/>
        })
        :
        <h1>Not found!</h1>
        }

        </CardWrapper>
        :
        <h1>Loading . . .</h1>
      }
     
    </div>
  );
};

export default App;

// Older Version======>

// const App = () => {
// =========>

// const inputRef = useRef(null)

// const [count, setCount] = useState(0)
// const [str, setStr] = useState('')
// const [showTest, setShowTest] = useState(true)

// const input = useRef("")
// const text = useRef("")
// const toggleText = () => {
//   text.current.classList.toggle("d-none")
// }

// function showValue(){
//   input.current.clasList.add('d-none')
//   console.log(input.current.value);
// }

// LOGIN
// const userName = useRef('')
// const password = useRef('')
// const card = useRef(null)

// useEffect(()=>{
//   card.current.addEventListener('click', (e)=>{
//     e.target.style.background = 'green'
//   })
// })
// const useAuth = ()=>{s
//   const user = {
//     username: userName.current.value,
//     password: password.current.value
//   }
//   console.log(user);
// }
// =========>
// return ( // ======RETURN======
// <div>
{
  /* =========> */
}

{
  /* <button onClick={()=> setShowTest(!showTest)}>Toggle test</button>
      {
        showTest ?  <Test/> : 'Unmounting'
      } */
}

{
  /* <div
    ref={card} 
    className="card card-light shadow-lg mx-auto mt-4" 
    style={{width: "300px"}}>
      <form className='form form-control' action="#">
        <input ref={userName} className='form form-control mb-3' type="text" placeholder='Enter Username'/>
        <input ref={password} className='form form-control mb-3' type="pasword" placeholder='Enter password'/>
        <button onClick={useAuth} className='btn btn-primary'>Login</button>
      </form>
    </div> */
}

{
  /* <button onClick={toggleText} className='btn btn-info'>Toggle Text</button>
      <div ref={text} className='m-4 p-4 border border-danger'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas error quia maiores iste voluptates hic dolor doloremque tenetur, fugiat officia corporis atque maxime incidunt perspiciatis molestias ex quas delectus sint tempore illum ut repudiandae. Voluptate quam earum sequi temporibus magni, praesentium fugiat suscipit veniam. Itaque est velit saepe alias aperiam nemo tempore illo nisi, quis doloribus! Ea totam ipsam, nobis ipsa quibusdam rerum laboriosam architecto libero aliquid voluptas, ipsum magni temporibus minima qui adipisci iusto omnis quos doloribus facere officia veritatis nemo dolorum! Dignissimos distinctio, omnis atque dicta eligendi dolor officia eaque eum nulla quia soluta quibusdam corrupti! Ipsum fugit explicabo dolorem eveniet id, aperiam cupiditate temporibus aliquam totam reprehenderit in eaque vel iste ipsam at similique, necessitatibus, suscipit voluptates accusantium? Necessitatibus sint voluptatum sit, provident mollitia nesciunt corporis vel nobis, nulla labore nostrum, aliquam optio odit in eos ea debitis inventore id expedita exercitationem minima eligendi asperiores voluptates. Amet obcaecati maxime nostrum ab, optio vel illum nesciunt quibusdam minima doloremque corporis beatae totam molestiae aliquid dicta soluta culpa suscipit quod numquam rem quae iure veniam reiciendis architecto. Eaque id hic dolores dicta soluta deserunt perspiciatis, eveniet labore recusandae velit ex, excepturi adipisci numquam corrupti. Provident officiis culpa quidem facere?</div>
      */
}

{
  /* <h1 className='text-secondary mb-5 mt-4 '>"{str}"</h1> */
}

{
  /* <div className='action-wrapper'>
        <input onChange={(e)=>setStr(e.target.value)} value={str} className='form form-control' type="text" placeholder='Enter the secret code: '/>  
        <button className='btn btn-success' onClick={showValue}>Focus On Input</button>
      </div> */
}

{
  /* <div className='action-wrapper mt-5'>

        <input 
          ref={input} 
          className='form form-control' 
          type="text" 
          placeholder='Enter the secret code: '/>
        
        <button onClick={showValue} className='btn btn-danger'>Focus On Input</button>

      </div> */
}
{
  /* <p>You have attempted to focus {count} times.</p> */
}
// </div>
//   );
// };
