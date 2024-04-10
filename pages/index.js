import Head from "next/head";
import { Quran } from "@/components/Quran";
import { ayatAlkorsi, ekhlas, lail, shaedAllah, shams } from "@/constants";
import { useState } from "react";
import { IoMdRefreshCircle } from "react-icons/io";

export default function Home() {
  const [randomKey, setRandomKey] = useState(0);
  const [n, setN] = useState(0);

  return (
    <>
      <Head>
        <title>نماز حرز</title>
        <meta name="description" content="نماز حرز" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{background: '#a7944b', padding: 8, display: 'flex', flexDirection: 'column', gap: 8, minHeight: '100vh'}} dir="rtl">
        <Quran onNotEnd={() => setN(n => n - 1)} onEnd={() => setN(n => n + 1)} key={randomKey + ayatAlkorsi} text={ayatAlkorsi} title="آیة الکرسی"></Quran>
        <Quran onNotEnd={() => setN(n => n - 1)} onEnd={() => setN(n => n + 1)} key={randomKey + shaedAllah} text={shaedAllah} title="شهد اللّه"></Quran>
        <Quran onNotEnd={() => setN(n => n - 1)} onEnd={() => setN(n => n + 1)} key={randomKey + shams} text={shams} title="سورة الشمس"></Quran>
        <Quran onNotEnd={() => setN(n => n - 1)} onEnd={() => setN(n => n + 1)} key={randomKey + lail} text={lail} title="سورة الليل"></Quran>
        <Quran onNotEnd={() => setN(n => n - 1)} onEnd={() => setN(n => n + 1)} key={randomKey + ekhlas} text={ekhlas} title="سورة الاخلاص"></Quran>
        {n === 5 && (
          <div style={{ textAlign: 'center' }}>
            <IoMdRefreshCircle onClick={() => {setRandomKey(Math.random())}} size="100" color="#ece48c" style={{ cursor: 'pointer' }} />
          </div>
        )}
        
      </main>
    </>
  );
}
