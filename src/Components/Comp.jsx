import React from 'react'
import { VscArrowSwap } from "react-icons/vsc";

function Comp() {
  return (
    <>
    <div className="p-10 rounded-3xl w-500 h-50vh bg-white text-black flex flex-col justify-center ">
        <h2 className='text-black mb-6 text-3xl '><b>Currency Converter</b></h2>

        <div className="mb-6">
            <p className='font-bold'>Enter Amount</p>
            <input className='w-full' type="Number" />
        </div>

        <div className="font-bold flex justify-center space-x-5 items-center mb-6">
            <div>
                <p>From</p>
                <div className='flex justify-center items-center border-solid border-black'>
                    <img width={50} src="https://flagsapi.com/US/flat/64.png" alt=""/> 
                    <select className='h-9' name="fromCntry" id=""></select>
                </div>

            </div>
            <div  className='h-1'>
            <VscArrowSwap size={30} />
            </div>
            
            <div>
                <p>To</p>
                <div className='flex justify-center items-center' >
                    <img width={50} src="https://flagsapi.com/US/flat/64.png" alt=""/> 
                    <select className='h-9'  name="fromCntry" id=""></select>
                </div>

            </div>
        </div>

        <div className='mb-7 font-bold text-xl'>
            <p >1 USD = 78 INR</p>
        </div>

        <button className='bg-blue-500 text-white'>Get Exchange Rate</button>
       
    </div>
    </>
  )
}

export default Comp