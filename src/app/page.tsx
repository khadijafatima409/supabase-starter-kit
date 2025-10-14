"use client";
import { useState } from "react";
type Bid = {
  id: number;
  amount: string;
  user: string;
  created_at: string;
};

export default function Home() {
  const [bids, setBids] = useState<Bid[]>([]);
  const [amount, setAmount] = useState("");

  const handleBid = () => {
    if (!amount) return;
    const newBid = {
      id: Date.now(),
      amount,
      user: "DemoUser",
      created_at: new Date().toLocaleTimeString(),
    };
    setBids([newBid, ...bids]); // show new bid instantly
    setAmount("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">💸 Live Bidding Demo</h1>

      {/* Bid Form */}
      <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-md mb-6">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter bid amount"
          className="border rounded-lg p-2 w-full mb-2"
        />
        <button
          onClick={handleBid}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Place Bid
        </button>
      </div>

      {/* Bids List */}
      <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3">Recent Bids</h2>
        <ul className="space-y-2">
          {bids.map((bid) => (
            <li
              key={bid.id}
              className="border p-2 rounded-lg flex justify-between"
            >
              <span>💰 {bid.amount}</span>
              <span className="text-sm text-gray-500">
                {bid.user} | {bid.created_at}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
