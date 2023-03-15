import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

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
    <div className="pl-2 font-poppins">
      <div className="flex flex-wrap h-screen flex-row justify-between">
        <div className="flex flex-col w-6/12">
          <div className="flex flex-col justify-center px-20 gap-5">
            <p className="font-black text-2xl py-4">GNUPool</p>
            <h1 className="text-7xl font-semibold text-[#6565d6] mt-16 leading-[90px]">
              <span className="font-black text-[#3661EB]">Stake</span> GNO{" "}
              as a Team
            </h1>
            <p className="text-2xl w-full text-[#888B94] font-normal">
              Create or Join a Pack and stake together
            </p>
            <br/>
            <button
              className="bg-[#3661EB] w-full h-14 mt-4 text-slate-100 font-normal rounded-md"
              onClick={requestAccount}
            >
              Connect wallet
            </button>
            <button className="bg-[#e9ecee] w-full h-14 text-[#80858B] font-medium rounded-md">
              Learn more about metamask policies
            </button>
          </div>
        </div>
        <div className="w-6/12 bg-[#7bbf8e] h-screen overflow-hidden">
          <img src="/cover-overlay.png" className="h-full object-contain"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
