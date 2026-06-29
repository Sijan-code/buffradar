'use client';
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react'; 
import Countdown from '../../../components/Countdown';
import TvRemoteController from '../../../components/TvRemoteController';

// এখানে একদম নিখুঁত গ্লোবাল টাইম ও বড় পতাকা সহ ডাটা সাজানো আছে
const getMatchBySlug = (slug) => {
  const data = {
    'germany-vs-paraguay': {
      title: 'Germany vs Paraguay',
      tournament: 'FIFA World Cup 2026 • Round of 32',
      time: '2026-06-29T20:30:00Z', // USA Eastern Time: 4:30 PM [১.২.২]
      flag1: '🇩🇪',
      flag2: '🇵🇾',
      freeSource: 'BBC iPlayer (UK)',
      vpnLink: 'https://your-nordvpn-affiliate-link.com', 
      streamLink: 'https://bbc.co.uk'
    },
    'france-vs-sweden': {
      title: 'France vs Sweden',
      tournament: 'FIFA World Cup 2026 • Round of 32',
      time: '2026-06-30T21:00:00Z', // USA Eastern Time: 5:00 PM [১.২.২]
      flag1: '🇫🇷',
      flag2: '🇸🇪',
      freeSource: 'ITVX (UK)',
      vpnLink: 'https://your-nordvpn-affiliate-link.com',
      streamLink: 'https://itv.com'
    },
    'argentina-vs-cape-verde': {
      title: 'Argentina vs Cape Verde',
      tournament: 'FIFA World Cup 2026 • Round of 32',
      time: '2026-07-03T22:00:00Z', // USA Eastern Time: 6:00 PM [১.২.২, ১.৩.৮]
      flag1: '🇦🇷',
      flag2: '🇨🇻',
      freeSource: 'BBC iPlayer (UK)',
      vpnLink: 'https://your-nordvpn-affiliate-link.com',
      streamLink: 'https://bbc.co.uk'
    }
  };
  return data[slug];
};

export default function MatchDetailPage({ params }) {
  // Next.js 15-এর params আনলক করার নতুন নিয়ম
  const unfoldedParams = React.use(params); 
  const match = getMatchBySlug(unfoldedParams.match_slug);
  const [isMatchLive, setIsMatchLive] = useState(false);

  if (!match) {
    return <div className="text-center py-20 text-white text-xl">Match Details Not Found!</div>;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-12">
      <TvRemoteController />

      <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
        <p className="text-center text-teal-400 text-xs font-extrabold uppercase tracking-widest">{match.tournament}</p>
        
        {/* টাইটেলের ঠিক ওপরে আপনার পছন্দের বড় দুই দেশের পতাকা */}
        <div className="flex justify-center gap-6 text-6xl md:text-7xl my-6 animate-pulse">
          <span>{match.flag1}</span>
          <span className="text-slate-600 text-2xl md:text-4xl self-center font-black">VS</span>
          <span>{match.flag2}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-center mt-2 mb-8 tracking-tight">{match.title}</h1>

        {/* লাইভ কাউন্টডাউন টাইমার */}
        <Countdown targetDate={match.time} onLive={setIsMatchLive} />

        {/* কীভাবে ফ্রি দেখবে তার নির্দেশিকা */}
        <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl mt-10">
          <h2 className="text-lg font-black text-yellow-400 uppercase tracking-wide mb-3">📺 Streaming Instructions:</h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Cable networks in the US charge high subscription fees for this match. However, you can stream it completely <span className="text-green-400 font-bold">FREE & OFFICIALLY</span> using a VPN on <span className="text-white font-bold">{match.freeSource}</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href={match.vpnLink} 
              target="_blank" 
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold p-4 rounded-xl text-center shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 hover:scale-[1.02] transition-all"
            >
              🚀 Step 1: Secure NordVPN (70% Off)
            </a>
            
            <a 
              href={isMatchLive ? match.stream_link : '#'} 
              target="_blank" 
              className={`w-full font-bold p-4 rounded-xl text-center shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all
                         ${isMatchLive 
                           ? 'bg-emerald-500 text-white cursor-pointer hover:scale-[1.02]' 
                           : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'}`}
            >
              🔗 {isMatchLive ? 'Step 2: Open Free Live Stream' : 'Stream Locked (Wait for Live)'}
            </a>
          </div>
        </div>

        {/* স্মার্ট টিভি ও ফায়ারস্টিক ইউজারদের জন্য কিউআর কোড */}
        <div className="mt-10 pt-8 border-t border-slate-800 text-center">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider mb-2">Smart TV / Firestick User?</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Scan this code with your smartphone to instantly complete Step 1 and checkout securely.
          </p>
          
          <div className="bg-white inline-block p-4 rounded-2xl mt-4 shadow-md">
            <QRCodeSVG 
              value={match.vpnLink} 
              size={140}
              bgColor={"#ffffff"}
              fgColor={"#0f172a"}
              level={"H"}
            />
          </div>
        </div>

      </div>
    </main>
  );
}
