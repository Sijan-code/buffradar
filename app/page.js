import React from 'react';
import Link from 'next/link';

// ১. গ্লোবাল ডাটাবেজ থেকে আজকের ও আগামীকালের সব বিশ্বকাপের ম্যাচ ফেচ করার ইঞ্জিন
async function getWorldCupMatches() {
  try {
    const res = await fetch('https://api.football-data.org/v4/matches', {
      headers: {
        'X-Auth-Token': 'cff459619afb4db8afa4d337a6f8d665'
      },
      next: { revalidate: 30 } // প্রতি ৩০ সেকেন্ড পর পর টাইমার ও লাইভ স্কোর অটো সিঙ্ক হবে
    });
    if (!res.ok) return { matches: [] };
    return res.json();
  } catch (error) {
    return { matches: [] };
  }
}

// স্মার্ট টিভি রিমোটের Up/Down/Enter কিবোর্ড সাপোর্ট ইঞ্জিন
if (typeof window !== "undefined") {
  window.addEventListener("keydown", (e) => {
    const active = document.activeElement;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      const focusable = document.querySelectorAll("a, button, input");
      const index = Array.prototype.indexOf.call(focusable, active);
      let nextIndex = e.key === "ArrowDown" ? index + 1 : index - 1;
      if (nextIndex >= 0 && nextIndex < focusable.length) {
        focusable[nextIndex].focus();
        focusable[nextIndex].scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });
}

// ২. মেইন ডাইনামিক হোমপেজ লেআউট
export default async function Home() {
  const data = await getWorldCupMatches();
  const matches = data?.matches || [];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased selection:bg-yellow-500 selection:text-slate-950">
    
      {/* হেডার ও ব্র্যান্ডিং */}
    <header className="border-b border-slate-900 bg-slate-950 px-4 py-6 text-center">
    <h1 className="text-2xl font-black tracking-tighter text-yellow-400">
    BUFFRADAR <span className="text-white text-xs bg-slate-900 px-2 py-1 rounded ml-1">v2</span>
  </h1>
  <p className="text-xs text-slate-500 mt-1">⚡ FIFA World Cup 2026 Live Fixtures & Timer Center</p>
</header>

      {/* মেইন ম্যাচ লিস্ট হাব */}
<main className="max-w-2xl mx-auto p-4 md:p-8 space-y-6">

<div className="flex justify-between items-center px-1">
<h2 className="text-sm font-black uppercase text-slate-400">🏆 Cup Fixtures & Live Streams</h2>
<span className="text-[10px] bg-red-600 text-white font-black px-2 py-0.5 rounded animate-pulse">RADAR LIVE</span>
</div>

{/* ডাটা এম্পটি হ্যান্ডেলার */}
{matches.length === 0 ? (
  <div className="bg-slate-900 p-12 rounded-xl border border-slate-800 text-center shadow-xl">
  <div className="text-4xl mb-3">📡</div>
  <h4 className="text-sm font-bold text-slate-300 mb-1">No Scheduled Matches Found</h4>
  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
  There are no fixtures running running on the dashboard right now. Check back closer to match hour!
  </p>
  </div>
  ) : (
  // ডাইনামিক ম্যাচ ফিক্সচার কার্ড ম্যাপ
  matches.map((match) => {
    const matchTime = new Date(match.utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const isLive = match.status === 'IN_PLAY' || match.status === 'PAUSED';

    return (
    <div key={match.id} className="bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition duration-300 overflow-hidden shadow-lg">
    
  {/* লীগ ব্যানার ও লাইভ/টাইমার ইন্ডিকেটর */}
  <div className="bg-slate-950/60 px-4 py-2 border-b border-slate-950 flex justify-between items-center text-[10px] font-bold text-slate-400">
  <span>{match.competition?.name || "FIFA WORLD CUP"}</span>
  {isLive ? (
    <span className="text-red-500 uppercase tracking-wider animate-pulse">• LIVE NOW</span>
    ) : (
    <span className="text-yellow-500 uppercase tracking-wider">⏳ Starts at {matchTime}</span>
    )}
    </div>

  {/* স্কোরবোর্ড এবং দুই দলের নাম */}
  <div className="p-6 flex items-center justify-between gap-4">
  <div className="flex-1 text-center md:text-right">
  <h4 className="text-sm md:text-base font-bold text-slate-200">{match.homeTeam?.name || "Home Team"}</h4>
  </div>
  
{/* কন্ডিশনাল স্কোরবোর্ড/টাইম বক্স */}
<div className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-lg font-black text-sm md:text-base text-yellow-400 min-w-[80px] text-center shadow-inner">
{isLive ? (
  `${match.score?.fullTime?.home ?? 0} - ${match.score?.fullTime?.away ?? 0}`
  ) : (
  <span className="text-slate-500 text-[11px] font-bold uppercase">VS</span>
  )}
  </div>

  <div className="flex-1 text-center md:text-left">
  <h4 className="text-sm md:text-base font-bold text-slate-200">{match.awayTeam?.name || "Away Team"}</h4>
  </div>
  </div>

{/* ডাইনামিক মানি ট্র্যাপ বাটন */}
<div className="px-6 pb-5 pt-2">
<Link 
href={`/worldcup/${match.id}`}
className="block text-center bg-slate-800 hover:bg-yellow-500 hover:text-slate-950 text-slate-300 font-black text-xs py-3 px-4 rounded-lg tracking-wide transition duration-300 shadow"
>
{isLive ? "⚡ WATCH LIVE HD STREAM NOW" : "📺 PRE-ORDER STREAM & UNBLOCK CHANNELS"}
</Link>
</div>

</div>
);
})
)}
</main>

      {/* ফুটার */}
<footer className="mt-20 py-8 text-center text-[10px] text-slate-600 border-t border-slate-900">
<p>© 2026 BUFFRADAR. All rights reserved.</p>
</footer>

</div>
);
}
