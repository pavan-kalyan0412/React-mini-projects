// import { useState } from 'react';

// function App() {
//   const [color, setColor] = useState('teal');

//   const colors = [
//     { name: 'Red', hex: '#FF0000' },
//     { name: 'Green', hex: '#008000' },
//     { name: 'Blue', hex: '#0000FF' },
//     { name: 'Yellow', hex: '#FFFF00' },
//     { name: 'Orange', hex: '#FFA500' },
//     { name: 'Purple', hex: '#800080' },
//     { name: 'Pink', hex: '#FFC0CB' },
//     { name: 'Turquoise', hex: '#40E0D0' },
//     { name: 'Lime', hex: '#00FF00' },
//     { name: 'Brown', hex: '#A52A2A' },
//     { name: 'Cyan', hex: '#00FFFF' },
//     { name: 'Magenta', hex: '#FF00FF' },
//     { name: 'Gold', hex: '#FFD700' },
//     { name: 'Silver', hex: '#C0C0C0' },
//     { name: 'Gray', hex: '#808080' },
//   ];

//   return (
//     <div
//       className="full-page"
//       style={{
//         backgroundColor: color,
//         height: '100vh',
//         // width: '100vw',
//         //display: 'flex',
//         alignItems:'end',
//          justifyContent: 'center',
//       }}
//     >
//       <div className="flex flex-wrap justify-center">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           {colors.map((c, index) => (
//             <button
//               key={index}
//               onClick={() => setColor(c.hex)}
//               className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
//               style={{ backgroundColor: c.hex }}
//             >
//               {c.name}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// import { useState } from 'react';

// function App() {
//   const [color, setColor] = useState('teal');

//   return (
//     <div className='w-full h-screen duration-1000' style={{ backgroundColor: color }}>
//       <div className='flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
//           <button
//             onClick={() => setColor('red')}
//             className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
//             style={{ backgroundColor: 'red' }}
//           >
//             Red
//           </button>
//           <button
//             onClick={() => setColor('green')}
//             className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
//             style={{ backgroundColor: 'green' }}
//           >
//             Green
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';

function App() {
  const [color, setColor] = useState('white');

  return (
    <div className='w-full h-screen duration-1000' style={{ backgroundColor: color }}>
      <div className='flex flex-wrap justify-center bottom-12 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-6 py-5 rounded-3xl'>
          <button
            onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('yellow')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor('purple')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: 'purple' }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
