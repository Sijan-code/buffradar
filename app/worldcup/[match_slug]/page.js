import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Countdown from '../../../components/Countdown';
import TvRemoteController from '../../../components/TvRemoteController';

// ১. এপিআই থেকে সিঙ্গেল ম্যাচের লাইভ ডাটা টানার ফাংশন
async function getSingleMatch(matchId) {
  const res = await fetch(`https://api.football-data.org/v4/matches{$matchId}`, {
    headers: {
      'X-Auth-Token': '8c50e27db931448b948719f9f6e695b2'
    },
    next: { revalidate: 30 } // প্রতি ৩০ সেকেন্ড পর পর ভেতরের স্কোর ও মিনিট অটো আপডেট হবে
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}

// ২. মেইন ম্যাচ ডিটেইলস পেজ কম্পোনেন্ট
export default async function MatchDetails({ params }) {
  const matchId = params.match_slug || params.id;
  const match = await getSingleMatch(matchId);

  // ডাটা না পাওয়া গেলে বা লোড হতে সময় নিলে এই মেসেজ দেখাবে
  if (!match) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-xl font-bold">Match details not found or loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-12">
      <TvRemoteController />
      
      <div className="max-w-4xl mx-auto text-center my-8">
        <span className="inline-block bg-red-600 text-xs font-black px-4 py-1 rounded mb-4">
          • LIVE SCORE ENGINE
        </span>
        
        {/* দুই দলের লাইভ নাম ও রিয়েল-টাইম স্কোরবোর্ড */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-8 bg-slate-900 p-8 rounded-xl border border-slate-800">
          <div className="text-center md:text-right flex-1">
            <h2 className="text-2xl md:text-4xl font-black">{match.homeTeam?.name || "Home Team"}</h2>
          </div>
          
          <div className="bg-red-600 px-6 py-2 rounded-lg font-black text-2xl md:text-3xl min-w-[120px]">
            {match.score?.fullTime?.home !== null ? match.score.fullTime.home : 0} 
            {" - "} 
            {match.score?.fullTime?.away !== null ? match.score.fullTime.away : 0}
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-4xl font-black">{match.awayTeam?.name || "Away Team"}</h2>
          </div>
        </div>

        {/* ম্যাচ স্ট্যাটাস (⏱️ LIVE, FINISHED, TIMED) */}
        <p className="text-teal-400 font-bold uppercase tracking-widest text-sm my-4">
          Status: {match.status === 'IN_PLAY' ? '• LIVE NOW' : match.status}
        </p>

        {/* আমাদের জাদুকরী নর্ডভিপিএন ইনকাম বাটন এবং অফিশিয়াল ব্রডকাস্টার গাইড */}
        <div className="my-12 p-6 bg-slate-900 rounded-xl border border-slate-800 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">📺 Official Free Channels & Stream Guide</h3>
          <p className="text-slate-400 text-sm mb-6">
            These global official channels (BBC, ITV, Fox) are geo-blocked in your region. 
            Use NordVPN to unblock smoothly in Ultra-HD!
          </p>
          
          {/* এই বাটনে ক্লিক করলেই আমাদের নর্ডভিপিএন পপ-আপ বা লিঙ্ক কাজ করবে */}
          <a 
            href="https://buffradar.com" // নর্ডভিপিএন এপ্রুভ হলে এখানে আপনার ইউনিক ইনকাম লিঙ্কটি বসবে
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-slate-950 font-black px-8 py-4 rounded-lg text-lg tracking-wide transition-all shadow-lg"
          >
            🛡️ Unlock Premium HD Stream (Get 63% OFF)
          </a>
        </div>

        {/* কিউআর কোড স্ক্যানার (মোবাইলে সরাসরি দেখার জন্য) */}
        <div className="flex flex-col items-center justify-center gap-4 my-8">
          <p className="text-sm text-slate-400">Scan to watch on Mobile</p>
          <div className="bg-white p-3 rounded-lg inline-block">
            <QRCodeSVG value={`https://buffradar.com{matchId}`} size={128} />
          </div>
        </div>
      </div>
    </main>
  );
}
