import React from 'react'
import { VscArrowSwap } from "react-icons/vsc";
import { useState, useEffect } from 'react';
import countryList from '../assets/cntryCode'

function Comp() {

    // useStates -->
    const [fromCntry, setFromCntry] = useState("USD");
    const [toCntry, setToCntry] = useState("INR");
    const [amnt, setAmnt] = useState(1);
    const [finalAmnt, setFinalamnt] = useState(1);

    const handleOnChange = (e) =>{

        setAmnt(e.target.value);
        
    }

    const fetchData=async()=>{

        let from = fromCntry.toLowerCase();
        let to = toCntry.toLowerCase();
        let api_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`

        let res = await fetch(api_url);
        let data = await res.json();
    
        // console.log(data[from][to]);
        let rate = data[from][to];
        let convertedAmnt = (amnt * rate).toFixed(2);
    
        setFinalamnt(convertedAmnt);

    }

    useEffect(() => {

        fetchData();

    }, [amnt,fromCntry,toCntry])
    
  return (
    <>
    <div className="p-10 rounded-3xl w-500 h-50vh bg-white text-black flex flex-col justify-center ">
        <h2 className='text-black mb-6 text-3xl '><b>Currency Converter</b></h2>

        <div className="mb-6">
            <p className='font-bold'>Enter Amount</p>
            <input className='w-full' type="Number" value={amnt} onChange={handleOnChange}/>
        </div>

        <div className="font-bold flex justify-center space-x-5 items-center mb-6">
            <div>
                <p>From</p>
                <div className='flex justify-center items-center border-solid border-black'>
                    <img width={50} src={`https://flagsapi.com/US/flat/64.png`} alt={fromCntry}/> 
                    <select className='h-9' value={fromCntry} onChange={(e)=>setFromCntry(e.target.value)}>
                    {
                        Object.entries(countryList).map(([name, code]) => (
                        <option key={code} value={name}>
                            {name}
                        </option>
                        ))
                    }
                    </select>
                </div>

            </div>
            <div  className='h-1'>
            <VscArrowSwap size={30} />
            </div>
            
            <div>
                <p>To</p>
                <div className='flex justify-center items-center' >
                    <img width={50} src={`https://flagsapi.com/IN/flat/64.png`} alt={toCntry}/> 
                    <select className='h-9' value={toCntry} onChange={(e)=>setToCntry(e.target.value)} >
                    {
                        Object.entries(countryList).map(([name, code]) => (
                        <option key={code} value={name}>
                            {name}
                        </option>
                        ))
                    }

                    </select>
                </div>
            </div>
        </div>

        <div className='mb-7 font-bold text-xl'>
            <p >{amnt} {fromCntry} = {finalAmnt} {toCntry}</p>
        </div>

        <button onClick={fetchData} className='bg-blue-500 text-white'>Get Exchange Rate</button>
       
    </div>
    </>
  )
}

export default Comp