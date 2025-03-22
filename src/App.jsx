import React from 'react';
import { Mail, Grid, Search, Mic, Volume2, MoreVertical, Compass } from 'lucide-react';

import './app.css';
const App = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  // Get current time to determine greeting
  const hours = currentDate.getHours();
  let greeting = "Good morning!";
  if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon!";
  } else if (hours >= 18) {
    greeting = "Good evening!";
  }

  const trendingTopics = [
    { id: 1, name: "Amit Shah" },
    { id: 2, name: "Delimitation Meet" },
    { id: 3, name: "Karnataka Bandh" },
    { id: 4, name: "Yashwant Verma" },
    { id: 5, name: "Bhagalakshmi Nadi" },
    { id: 6, name: "Osama Tabash" },
    { id: 7, name: "Avneet Kaur" },
    { id: 8, name: "Ganesh Acharya" },
    { id: 9, name: "Varun Chakravarthy" },
    { id: 10, name: "IPL 2023" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-3xl font-bold text-violet-600">YAhooo!</h1>
        </div>
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-gray-600" />
          <Grid className="w-6 h-6 text-gray-600" />
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-500 text-xs">🌤️</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">23°</span>
              <span className="text-gray-600">C</span>
            </div>
          </div>
          <div className="text-xs text-gray-600">Kolkata</div>
        </div>
      </header>

      {/* Main Content - rest of your code remains unchanged */}
      <main className="max-w-3xl mx-auto mt-8 px-4">
        {/* Greeting */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-normal text-gray-800">{greeting}</h1>
          <p className="text-sm text-gray-600 mt-1">Today is {formattedDate}.</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="flex items-center border rounded-full overflow-hidden shadow-sm">
            <div className="pl-4">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input type="text" placeholder="Search the web" className="w-full py-3 px-2 outline-none text-gray-700" />
            <div className="flex items-center gap-2 pr-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
               
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm">
            <Compass className="w-4 h-4" />
            <span>Cricket</span>
          </button>
          <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm">
            <Compass className="w-4 h-4" />
            <span>Movies</span>
          </button>
          <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm">
            <Compass className="w-4 h-4" />
            <span>News</span>
          </button>
          <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm">
            <Compass className="w-4 h-4" />
            <span>Horoscope</span>
          </button>
        </div>

        {/* Trending Now */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-medium mb-4">Trending now</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {trendingTopics.map((topic) => (
              <div key={topic.id} className="flex items-center gap-2">
                <span className="font-medium text-sm">{topic.id}.</span>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">{topic.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;