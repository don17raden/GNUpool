import { useState } from "react";
import { Theme, Button } from 'react-daisyui'

  export default function dash() {
    const [showModal, setShowModal] = useState(false);
    return (
        <Theme dataTheme="synthwave">
        <div className="font-poppins bg-black overflow-auto">
        {/* <div className="font-poppins ml-20">
            <p className="font-black text-2xl pt-2">GNOD</p>
        </div> */}

        <center>
            <h1 className="text-7xl font-semibold   leading-[90px]">
                <span className="font-black  text-[#e7ff6d]">GNUPool</span>
            </h1>   
            
            <button type="button" className="mt-5 text-gray-900 bg-yellow-300 hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => setShowModal(true)} >Already have a pack</button>


            <div className="w-1/2 mt-5 bg-zinc-900 rounded h-44 ">
                <div className="flex flex-row">
                    <div className=" basis-1/2">
                        <p className="text-yellow-200 font-bold text-1xl pt-3">Stake GNO</p>
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2 ">
                        <div className="flex">
                            <p className="justify-end font-bold text-yellow-200 text-1xl pt-3">Balance : 0.0 GNO</p>
                            <button type="button" className="text-black ml-5 mt-2 bg-yellow-200 border border-yellow-300 focus:outline-none hover:bg-yellow-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-3 py-1 dark:bg-yellow-800 dark:text-yellow-200 dark:border-yellow-600 dark:hover:bg-yellow-700 dark:hover:border-yellow-600 dark:focus:ring-gray-700">Max</button>
                        </div>
                    </div>
                </div>

                <form className="pt-2">   
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <img src='./logo.png' className="h-8 w-8"  />
                        </div>
                        <input type="number"  className="text-black block w-full text-2xl p-4 pl-14 bg-gradient-to-r from-yellow-200 to-yellow-500" placeholder="0.0" required />
                        <h2 className="text-white absolute right-3 bottom-4 text-2xl"> ≈ $45.2 USD</h2>
                    </div>
                </form>
            </div>
            <center>
            <div className="items-center flex mt-6 z-40 justify-center ">
                <button type="button" className=" absolute bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 font-medium rounded-full text-sm px-4 py-4 ">
                    <img src='./exch.svg' className="h-10 w-10"></img>
                </button>
            </div>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    
                    <div className=" items-center justify-center rounded-lg shadow-lg relative flex flex-col w-full bg-white border-2 border-white outline-none focus:outline-none">
                    
                        <div className="flex items-center justify-center border-solid border-slate-200 rounded-t">
                            <h3 className="pt-2 text-2xl  text-black font-bold">GNUPool</h3>
                       
                        </div>
                        <div className="relative p-3 flex-auto">
                        <p className="my-2 text-slate-900 text-lg leading-relaxed">
                            Enter Your Pack code 
                        </p>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                        </div>
                        <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-yellow-300 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Submit
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
    
            </center>
            <div className="w-1/2 h-92 mt-8 bg-zinc-900">
                <div className="flex flex-row pt-4 mb-3">
                    <div className=" basis-1/2">
                        <p className=" text-yellow-200 font-bold text-1xl pt-3">Receive GNO</p>
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2 ">
                        <div className="flex">
                            <p className="justify-end font-bold  text-yellow-200 text-1xl pt-3">Balance : 0.00 GNO</p>
                        </div>
                    </div>
                </div>

                <div className="mr-2 ml-2 p-5 rounded bg-gradient-to-r from-yellow-200 to-yellow-500">
                    <div className="flex justify-between">
                        <div className="relative inset-y-0 left-0 flex items-center  pointer-events-none">
                            <img src='./logo.png' className="h-8 w-8"  />
                        </div>
                        <p className="pt-1 text-black text-2xl">34 GNO</p>
                        <div className="basis-1/4"></div>
                        <div className="flex justify-end basis-1/2">
                            <p className="text-2xl">≈ $45.2 USD</p>
                        </div>
                    </div> 
                </div>
                <hr className="h-px mt-4 w-4/5 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className="mr-2 p-3">
                    <div className="flex justify-between">
                        <p className="pt-1 text-1xl">Average Return</p>
                        <div className="basis-1/4"></div>
                        <div className="flex justify-end basis-1/2">
                            <p className="text-1xl">≈ 5.82% APR</p>
                        </div>
                    </div> 
                </div>
                <hr className="h-px mt-4 w-4/5 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className="mr-2 p-3">
                    <div className="flex justify-between">
                        <p className="pt-1 text-1xl">Transaction Cost</p>
                        <div className="basis-1/4"></div>
                        <div className="flex justify-end basis-1/2">
                            <p className="text-1xl">0.01920 ETH (≈ $34.04 USD)</p>
                        </div>
                    </div> 
                </div>

                <div className="pt-5 pb-5">
                    <p className=" text-yellow-500">Help Center</p>
                </div>
            </div>
            </center>
            <br/>
        </div>
        </Theme>
    );
  }
  