

  export default function dash() {

    return (
        <div className="font-poppins ">
        {/* <div className="font-poppins ml-20">
            <p className="font-black text-2xl pt-2">GNOD</p>
        </div> */}

        <center>
            <h1 className="text-7xl font-semibold   leading-[90px]">
                <span className="font-black text-[#4fd4aa]">GNUPool</span>
            </h1>   
            
            <button type="button" className="mb-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Already have a pack</button>


            <div className="w-1/2 bg-[#1a5550] rounded h-44 ">
                <div className="flex flex-row">
                    <div className=" basis-1/2">
                        <p className="text-green-300 font-bold text-1xl pt-3">Stake GNO</p>
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2 ">
                        <div className="flex">
                            <p className="justify-end font-bold text-green-300 text-1xl pt-3">Balance : 0.0 GNO</p>
                            <button type="button" className="ml-5 mt-2 bg-white border border-green-300 focus:outline-none hover:bg-green-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-3 py-1 dark:bg-green-800 dark:text-green-200 dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-green-600 dark:focus:ring-gray-700">Max</button>
                        </div>
                    </div>
                </div>

                <form className="pt-2">   
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <img src='./cover.png' className="h-8 w-8"  />
                        </div>
                        <input type="number"  className=" block w-full text-2xl p-4 pl-14  text-green-900 border border-green-300 rounded-lg  bg-gray-700 focus:ring-green" placeholder="0.0" required />
                        <h2 className="text-white absolute right-3 bottom-4 text-2xl"> ≈ $45.2 USD</h2>
                    </div>
                </form>
            </div>
            <center>
            <div className="items-center flex mt-6 z-40 justify-center ">
                <button type="button" className=" absolute bg-[#14b8a6] hover:bg-[#5eead4] font-medium rounded-full text-sm px-4 py-4 ">
                    <img src='./exch.svg' className="h-10 w-10"></img>
                </button>
            </div>
            </center>
            <div className="w-1/2 h-92 mt-8  bg-[#1a5550]">
                <div className="flex flex-row pt-4 mb-3">
                    <div className=" basis-1/2">
                        <p className=" text-green-300 font-bold text-1xl pt-3">Receive GNO</p>
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2 ">
                        <div className="flex">
                            <p className="justify-end font-bold  text-green-300 text-1xl pt-3">Balance : 0.00 GNO</p>
                        </div>
                    </div>
                </div>

                <div className="mr-2 ml-2 p-5 rounded  bg-gray-700">
                    <div className="flex justify-between">
                        <div className="relative inset-y-0 left-0 flex items-center  pointer-events-none">
                            <img src='./cover.png' className="h-8 w-8"  />
                        </div>
                        <p className="pt-1 text-2xl">34 GNO</p>
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
                    <p className=" text-green-500">Help Center</p>
                </div>
            </div>
            </center>
            <br/>
        </div>
    );
  }
  