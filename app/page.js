import Link from 'next/link';
import TvRemoteController from '../components/TvRemoteController';
import { worldCupMatches as matches } from '../data/matchesData';

async function getLiveMatches() {
  const res = await fetch('https://api.football-data.org/v4/matches', {
    headers: {
      'X-Auth-Token': 'cff459619afb4db8afa4d337a6f8d665'
    },
    next: { revalidate: 60 } // প্রতি ৬০ সেকেন্ড পর পর স্কোর ও ম্যাচ অটো আপডেট হবে
  });

  if (!res.ok) {
    throw new Error('Failed to fetch match data');
  }

  return res.json();
}



export default async function Home() {
  const data = await getLiveMatches()
  const matches = data.matches;
  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-12">
      <TvRemoteController />

      <header className="text-center my-8">
        <div className="inline-block bg-red-600 text-xs font-black px-4 py-1 rounded-full animate-bounce mb-3 tracking-widest">
          🏆 LIVE 2026 FIFA WORLD CUP
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          Global Stream <span className="text-teal-400">Finder</span>
        </h1>
        <p className="text-slate-400 text-sm mt-3 max-w-md mx-auto">
          Select a match tonight to unlock official free HD streaming options instantly.
        </p>
      </header>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {matches.map((match) => (
          <Link 
            key={match.id} 
            href={`/worldcup/${match.id}`}
            className="block bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all duration-200
                       focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:border-yellow-400 focus:scale-[1.03] hover:scale-[1.03]"
          >
            <div className="flex justify-between items-center text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
              <span>{match.competition?.name || "FIFA WorldCup"}</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-[10px]">WEB & TV</span>
            </div>
            <div className="flex items-center justify-center gap-4 my-4 text-2xl font-black">
              <span>{match.homeTeam.name || "homeTeam"}</span>
              <span className="text-center text-xl md:text-2xl">{match.title}</span>
              <span>{match.awayTeam.name || "AwayTeam"}</span>
            </div>
            <p className="text-center text-slate-500 text-xs font-medium">Click / Select to open Stream Guide →</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
