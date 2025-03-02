import { useState } from 'react';
import Barcode from 'react-barcode';
import logo from './assets/logo.png';

function App() {
  const [signature, setSignature] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-lg">
        {/* Delivery Section Header */}
        <div className="border-b-2 border-black py-3">
          <h1 className="text-center text-2xl font-bold">Delivery Section</h1>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-[150px_1fr] border-b-2 border-black">
          {/* Signature Row */}
          <div className="border-r-2 border-black p-4 flex flex-col items-center justify-center">
            <p className="font-semibold text-md">Signature</p>
            <p className="text-md font-light mt-2">X</p>
          </div>
          <div className="p-4">
            <input
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              className="w-full h-full border-none focus:outline-none text-md"
            />
          </div>

          {/* Printed Name Row */}
          <div className="border-r-2 border-t-2 border-black p-4 flex items-center flex-col justify-center">
            <p className="font-semibold text-md">Printed</p>
            <p className="font-semibold text-md">Name</p>
          </div>
          <div className="border-t-2 border-black p-4">
            <p className='w-full h-full border-none focus:outline-none text-md resize-none'>
              LOLITA ANN CLARK
            </p>
          </div>

          {/* Delivery Address Row */}
          <div className="border-r-2 border-t-2 border-black p-4 flex items-center flex-col justify-center">
            <p className="font-semibold text-md">Delivery</p>
            <p className="font-semibold text-md">Address</p>
          </div>
          <div className="border-t-2 border-black p-4">
            <p className='w-full h-full border-none focus:outline-none text-md resize-none'>
              2644 Ulster Court, Waldorf, MD 20602
            </p>
          </div>
        </div>

        {/* USPS Barcode Section - Redesigned to match reference */}
        <div className="border-b-2 border-black p-4">
          <div className="border-2 border-red-600 rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
            <div className="text-lg font-bold mr-8">USPS</div>
            <div className="flex-1 flex flex-col items-center">
              <div className="relative mb-2">
                <Barcode
                  value="9400109206094695666895"
                  width={1}
                  height={60}
                  fontSize={0}
                  margin={0}
                  displayValue={false}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-4 text-md">VARIABLE DATA</span>
                </div>
              </div>
              <div className="text-sm font-medium mt-1">TRACKING ID: 9400109206094695666895</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-center">
          <div className='flex items-center justify-center flex-col'>
            <div className="flex items-center">
              <span className="text-md font-normal">We </span>
              <span
                className="text-md font-bold italic relative inline-block"
                style={{
                  transform: 'rotate(-15deg) translateY(-2px)',
                  marginLeft: '2px',
                  marginRight: '2px'
                }}
              >
                Re
              </span>
              <span className="text-md font-normal text-center">Deliver for You!</span>
            </div>
            <p className="text-sm mt-2">PS Form 3849, March 2025 (Reverse)</p>
          </div>
          <div className="mt-4 md:mt-0">
            <img src={logo} alt="DHL" className="w-40 h-10 object-fit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;