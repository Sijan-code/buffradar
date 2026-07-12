import "./globals.css";
import Script from "next/script"

export const metadata = {
  title: "BuffRadar - Free Live Sports & Movie Stream",
  description: "Find where to watch live world cup and matches online free",
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 font-sans antialiased text-white">
    <Script
  id="monetag-multitag"
  strategy="lazyOnload"
  dangerouslySetInnerHTML={{
    _html:`
    (function(s,u,z,p,v,e,d){s[p]=s[p]||function(){(s[p].q=s[p].q||[]).push(arguments)},e=u.createElement(z),d=u.getElementsByTagName(z);e.async=1;e.src=v;e.referrerPolicy='no-referrer-when-downgrade';d.parentNode.insertBefore(e,d)})(window,document,'script','_syan', 'https://quge5.com/88/tag.min.js')
    `,
  }}
/>
        {/* ব্র্যান্ড নেভিগেশন বার */}
        <nav className="border-b border-slate-900 bg-slate-950/80 backdrop-blur sticky top-0 z-50 px-6 py-4">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <span className="text-xl font-black tracking-wider text-teal-400">
              BUFF<span className="text-white">RADAR</span>
            </span>
            <div className="flex gap-4 text-xs font-bold text-slate-400">
              <span className="text-teal-400">● LIVE WORLD CUP</span>
            </div>
          </div>
        </nav>

        {/* মূল পেজের কন্টেন্ট */}
        {children}

        {/* ব্র্যান্ড ফুটার */}
        <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-600 mt-20">
          <p>© 2026 BuffRadar. All Rights Reserved.</p>
          <p className="mt-2 max-w-md mx-auto px-4 text-[10px]">
            Disclaimer: BuffRadar only links to official, legal, and free-to-air broadcasting services. We do not host any pirated streams.
          </p>
        </footer>
      </body>
    </html>
  );
}
