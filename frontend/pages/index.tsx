import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
declare var window: any
const Home: NextPage = () => {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    //console.log("Inside Function requestAccount");

    if (window.ethereum) {
      //console.log("Detected Metamsk");
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setWalletAddress(accounts[0]);
        router.push("/team");
    } else {
      alert("Please install metamask");
    }
  }


  return (
    <div className="pl-2 font-poppins  bg-black">
      <div className="flex flex-wrap h-screen flex-row justify-between">
        <div className="flex flex-col w-6/12">
          <div className="flex flex-col justify-center px-20 gap-5">
            <p className="font-black text-2xl py-4">GNUPool</p> 
            {/* <img className=" py-4 h-14 w-24" src="./logo-name.png" /> */}
            <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 mt-16 leading-[90px]">
              <span className="font-black  bg-clip-text">Stake</span> GNO{" "}
              as a Team
            </h1>
            <p className="text-2xl w-full text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 font-normal">
              Create or Join a Pack and stake together
            </p>
            <br/>
            <button
              className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 w-full h-14 mt-4 text-black font-bold rounded-md"
              onClick={requestAccount}
            >
              Goto App
            </button>
            <button className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-500 w-full h-14 text-[#80858B] font-medium rounded-md">
              Learn more 
            </button>
          </div>
        </div>
        <div className="w-6/12 bg-[#7bbf8e] h-screen object-fill	">
          <img src="/cover.jpeg" className="h-full"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
