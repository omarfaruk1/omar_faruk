// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnBViioxgNR5dw8cbdRS0XPrt2CPeKcBH8Ug&s';
const wid = 200;
const hei = 200;

const styleH1 = { color : 'red',
                  backgroundColor : 'yellow',
}

 function App() 
 {
  return ( <section>
              <img src={imageURL} width={wid} height={hei} />
              <h1 style = {styleH1}>This is 18+ website. Do not click if you are under 18</h1>

              <MyButton/>
              <MyButton/>
              <MyButton/>
          </section>



          // <div>
          //   <h1>heading</h1>
          //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non commodi corporis, accusantium tenetur totam voluptatum quisquam repudiandae beatae repellat?</p>

          // </div>
        );

        
 }
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>OMAR FARUK</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }



function MyButton () {
  const label ='click me';
  const buttonStyle = {
    border: '1px solid red',
    color: 'purple',
  };

  return (<button style = {buttonStyle}>{label}</button>);
}

export default App
