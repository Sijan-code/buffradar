import React from 'react';
import QRCode from 'qrcode';

// এপিআই-এর জ্যাম ছাড়াই সরাসরি ডাইনামিক ম্যাচ নেম জেনারেটর
export default async function MatchStream({ params }) {
  const resolvedParams = await params;
  const matchSlug = resolvedParams.match_slug || "live-match";
  const readableName = matchSlug.replace(/-/g, '').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans antialiased selection:bg-yellow-500 selection:text-slate-950">
    
      {/* ১. টপ প্রিমিয়াম হেডার ও লাইভ নোটিশ */}
    <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur sticky top-0 z-50 px-4 py-4 text-center">
    <h1 className="text-xl font-black tracking-tighter text-yellow-400">
    BUFFRADAR <span className="text-white text-xs bg-slate-900 px-2 py-1 rounded ml-1">v2 STREAM HUB</span>
  </h1>
  <p className="text-[11px] text-red-500 font-bold uppercase tracking-widest mt-1 animate-pulse">
  • LIVE STREAMING ULTRA HD ACTIVE
  </p>
</header>

<div className="max-w-4xl mx-auto p-4 md:p-8 space-y-6">

        {/* ২. ম্যাচের শিরোনাম উইজেট */}
<div className="bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 text-center shadow-2xl">
<span className="text-[9px] bg-slate-950 border border-slate-800 text-slate-400 font-black px-3 py-1 rounded-full uppercase tracking-wider">
🏆 FIFA World Cup 2026 Knockout
</span>
<h2 className="text-xl md:text-3xl font-black mt-3 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300">
{readableName}
</h2>
</div>

{/* ৩. বাফস্ট্রিমস স্টাইলের প্রিমিয়াম ভিডিও প্লেয়ার উইজেট */}
<div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative group">

<div className="bg-slate-950/90 px-4 py-2.5 flex justify-between items-center border-b border-slate-950 text-xs font-bold text-slate-400">
<span className="flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
🔴 BUFFER: 0.2s | FPS: 60
</span>
<span className="bg-slate-900 px-2 py-0.5 rounded text-[10px] text-teal-400">1080p HD</span>
</div>

<div className="relative aspect-video bg-black flex flex-col items-center justify-center p-6 text-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.8)_0%,rgba(2,6,23,1)_100%)] z-0"></div>

<div className="relative z-10 space-y-4 max-w-md mx-auto">

{/* মেইন প্লে বাটন আইকন (আপনার আসল PureVPN লিঙ্ক যুক্ত) */}
<a 
href="https://billing.purevpn.com/aff.php?aff=49387910" 
target="_blank"
rel="noopener noreferrer"
className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 hover:bg-yellow-400 text-slate-950 rounded-full flex items-center justify-center pl-1.5 shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:scale-105 transition transform duration-300 mx-auto"
>
<svg xmlns="http://w3.org" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10"><path d="M8 5v14l11-7z"/></svg>
</a>

              {/* 📺 স্মার্ট টিভি নোড-জেএস কিউআর কোড উইজেট */}
<div className="hidden md:flex flex-col items-center bg-slate-950/90 border border-slate-800 p-4 rounded-xl max-w-xs mx-auto space-y-2 shadow-2xl mb-2">
<span className="text-[10px] bg-teal-500 text-slate-950 font-black px-2 py-0.5 rounded uppercase tracking-wider">
📺 SMART TV QUICK ACTIVATE
</span>

{/* নোড-জেএস এখানে সরাসরি ১ মিলি সেকেন্ডে আপনার লিংক দিয়ে ছবি বানাবে */}
<img 
src={await QRCode.toDataURL("https://purevpn.com", { margin: 2, width: 200 })} 
alt="Scan to Activate VPN" 
className="w-32 h-32 border-4 border-white rounded-lg shadow-lg"
/>

<p className="text-[10px] text-slate-400 font-bold max-w-[180px] leading-tight">
Scan with your mobile camera to instantly unblock HD stream on TV!
</p>
</div>

<div className="space-y-2">
<h3 className="text-sm md:text-lg font-black text-rose-500 uppercase tracking-wide">
⚠️ Stream Geo-Blocked In Your Region
</h3>
<p className="text-[11px] md:text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
Official broadcasting networks (Fox Sports, BBC, Sky) have restricted this match in your IP address. 
Click below to instantly unblock with high-speed premium servers.
</p>
</div>

{/* 📖 6. VPN Setup & Official Streaming Guide */}
<div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-2xl mt-6">
<h5 className="text-xs font-black uppercase text-yellow-400 tracking-wider mb-4 text-center">
📖 HOW TO UNBLOCK & WATCH ON MOBILE, LAPTOP & SMART TV
</h5>

<div className="space-y-4 text-xs text-slate-300 leading-relaxed">
    {/* STEP 1 */}
<div className="flex gap-3 items-start bg-slate-950 p-3 rounded-lg border border-slate-900">
<span className="bg-teal-500 text-slate-950 font-black px-2 py-0.5 rounded">STEP 1</span>
<div>
<p className="font-bold text-white mb-1">Purchase & Activate VPN</p>
<p className="text-slate-400 text-[11px]">
Scan the QR Code above or click the main play button. Alternatively,{' '}
<a 
href="https://purevpn.com" 
target="_blank" 
rel="noopener noreferrer" 
className="text-teal-400 font-bold underline hover:text-teal-300"
>
Click Here
</a>{' '}
to activate <b>PureVPN</b> on your device. Your username and password will be instantly sent to your email.
</p>
</div>
</div>

{/* STEP 2 */}
<div className="flex gap-3 items-start bg-slate-950 p-3 rounded-lg border border-slate-900">
<span className="bg-teal-500 text-slate-950 font-black px-2 py-0.5 rounded">STEP 2</span>
<div>
<p className="font-bold text-white mb-1">Connect to UK/USA Server</p>
<p className="text-slate-400 text-[11px]">Download the PureVPN App from the App Store or Play Store on your Mobile, Laptop, or Smart TV. Log in and connect to the <b>United Kingdom (UK)</b> or <b>United States (USA)</b> server with just one click.</p>
</div>
</div>

    {/* STEP 3 */}
<div className="flex gap-3 items-start bg-slate-950 p-3 rounded-lg border border-slate-900">
<span className="bg-teal-500 text-slate-950 font-black px-2 py-0.5 rounded">STEP 3</span>
<div>
<p className="font-bold text-white mb-1">Enjoy Free HD Stream</p>
<p className="text-slate-400 text-[11px]">While the VPN is active, click on the official streaming buttons below like <b>BBC iPlayer, ITVX</b>, or <b>Fox Sports</b>. Enjoy ultra-HD quality streaming on your TV or mobile without any buffering or annoying ads!</p>
</div>
</div>
</div>
</div>




{/* অ্যাকশন ইনকাম বাটন */}
<a 
href="https://billing.purevpn.com/aff.php?aff=49387910" 
target="_blank"
rel="noopener noreferrer"
className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs md:text-sm px-6 py-3.5 rounded-lg tracking-wide transition duration-300 shadow-xl"
>
🛡️ UNBLOCK STREAMS VIA PUREVPN (63% OFF)
</a>
</div>

<div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur px-4 py-3 flex justify-between items-center text-slate-500 text-xs z-10 select-none pointer-events-none">
<div className="flex items-center gap-4">
<span>▶</span>
<span>🔊 🕒 00:00 / 90:00</span>
</div>
<div className="flex items-center gap-3">
<span>⚙️ Settings</span>
<span>🖥️ Fullscreen</span>
</div>
</div>

</div>
</div>

        {/* ৪. ব্যাকআপ সার্ভার বাটন হাব */}
<div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-2xl">
<h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-4">
🔄 Backup High-Speed Stream Servers
</h4>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-bold text-xs">
<a href="https://billing.purvpn.com/aff.php?aff=49387910" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-950 hover:bg-yellow-500 border border-slate-800 text-slate-300 hover:text-slate-950 text-center rounded transition">
🚀 Server 1 (HD English)
</a>
<a href="https://billing.purevpn.com/aff.php?aff=49387910" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-950 hover:bg-yellow-500 border border-slate-800 text-slate-300 hover:text-slate-950 text-center rounded transition">
⚡ Server 2 (Ultra 4K Stream)
</a>
<a href="https://billing.purevpn.com/aff.php?aff=49387910" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-950 hover:bg-yellow-500 border border-slate-800 text-slate-300 hover:text-slate-950 text-center rounded transition">
📡 Server 3 (Mobile Friendly)
</a>
</div>
<p className="text-[10px] text-slate-500 mt-3 text-center">
* Note: All servers require a premium secured network to prevent ISP lag or broadcast copyright blockages.
</p>
</div>

        {/* ৫. অফিশিয়াল ফ্রি ভিডিও সোর্স লিংক হাব */}
<div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 text-center shadow-2xl">
<h5 className="text-xs font-black uppercase text-teal-400 tracking-wider mb-3">
🔗 STEP 2: OPEN OFFICIAL FREE STREAM LINKS BELOW
</h5>
<p className="text-[11px] text-slate-400 mb-4">
After turning ON PureVPN (UK/USA Server), click any official official button below to watch the live match without any buffering or ads!
</p>
<div className="flex flex-col sm:flex-row justify-center gap-3 font-bold text-xs">
<a href="https://bbc.co.uk" target="_blank" rel="noopener noreferrer" className="p-3 bg-red-600 hover:bg-red-700 text-white text-center rounded-lg transition shadow">
📺 Stream 1: BBC iPlayer (UK Free)
</a>
<a href="https://itv.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-600 hover:bg-cyan-700 text-white text-center rounded-lg transition shadow">
📺 Stream 2: ITVX Sport (UK Free)
</a>
<a href="https://foxsports.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition shadow">
📺 Stream 3: Fox Sports HD (USA Free)
</a>
</div>
</div>
</div>
</main>
);
}


