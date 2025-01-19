"use client";

import Link from 'next/link'
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Menampilkan gambar landscape terlebih dahulu
    const imageTimer = setTimeout(() => {
      setIsImageLoaded(true);
    }, 0); // Langsung muncul saat load

    // Setelah 1 detik, mulai tampilkan video
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);

    // Setelah 1.5 detik dari video (total 2.5 detik), tampilkan konten dan header
    const contentTimer = setTimeout(() => {
      setShowContent(true);
      setShowHeader(true);
    }, 2500);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(videoTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header/Navigation dengan animasi fade */}
      <nav className={`w-full z-50 px-4 py-2 bg-black/30 backdrop-blur-sm transition-all duration-1000 ${
        showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/mogcoin/tab_icon.png" alt="MOG" className="h-8 w-8" />
            <div>
              <div className="text-white font-bold text-shadow">MOG COIN</div>
              <div className="text-white/80 text-xs text-shadow">$0.00001580</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-yellow-300 font-bold text-shadow hover:text-yellow-400 transition-colors">
              About $MOG
            </Link>
            <Link href="/memes" className="text-white font-semibold text-shadow hover:text-yellow-300 transition-colors">
              Memes
            </Link>
            <Link href="/merch" className="text-white font-semibold text-shadow hover:text-yellow-300 transition-colors">
              Merch
            </Link>
            <Link href="/how-to-buy" className="text-white font-semibold text-shadow hover:text-yellow-300 transition-colors">
              How To Buy
            </Link>
            <Link href="/bridge" className="text-white font-semibold text-shadow hover:text-yellow-300 transition-colors">
              How to Bridge
            </Link>
            <Link href="/mog-me" className="text-white font-semibold text-shadow hover:text-yellow-300 transition-colors">
              Mog Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section dengan background transparan */}
      <div className="relative min-h-screen flex items-center">
        {/* Static Image Background dengan fade in */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/mogcoin/landscape.png"
            alt="Landscape"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            } ${showVideo ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>

        {/* Video Background dengan fade in */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`object-cover w-full h-full transition-opacity duration-1000 ${
              showVideo && isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/mogcoin/touching grass landscape.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content dengan fade dan slide */}
        <div className={`relative z-10 w-full transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-[120px] font-pixel font-bold text-yellow-300 leading-none mb-4">
                $MOG
              </h1>
              <p className="text-2xl text-white font-pixel mb-8">
                MODERN HERO RENEWED
              </p>
              <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-sm rounded-3xl p-8 mb-12">
                <img 
                  src="/mogcoin/hero-image.png" 
                  alt="Hero Message" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex justify-center space-x-8 font-pixel">
                <Link 
                  href="https://medium.com/@staycold912/emergence-fde508fa272c" 
                  target="_blank"
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  EMERGENCE
                </Link>
                <Link 
                  href="https://medium.com/@staycold912/vision-fb4bcd01cdca" 
                  target="_blank"
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  VISION
                </Link>
                <Link 
                  href="https://medium.com/@staycold912/lore-d06833d04e62" 
                  target="_blank"
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  LORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content dengan background biru */}
      <div className="bg-[#0000EE]">
        <div className="px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title */}
            <div>
              <h1 className="text-[120px] font-bold text-yellow-300 leading-none tracking-tight">
                ABOUT
                <br />
                $MOG
              </h1>
              <p className="text-2xl text-white italic mt-4">
                "The internet's first culture coin"
              </p>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-yellow-300 text-2xl font-bold mb-4">
                  $MOG is the internet's first culture coin.
                </h2>
                <p className="text-white text-lg leading-relaxed">
                  The idea for Mog began as a fun meme among friends, and in the Summer of 2023 
                  the token was launched as a fair launch memecoin via a Uniswap V2 LP. Although it started as a joke 
                  among friends, when the project went live it became immediately clear that something truly special 
                  had been created. Mog immediately set itself apart from other projects through its open-ended memetic 
                  branding and unique content. The cultural underpinning of Mog, effortless cosmic domination, is an idea and 
                  mentality that anyone can adopt, and can be applied to any situation in life. It is simply about being 
                  the best version of yourself in anything that you do – being confident in yourself, your community, 
                  and your own success.
                </p>
              </div>

              <div>
                <h3 className="text-white text-2xl font-bold mb-4">In it for the tech?</h3>
                <button className="bg-[#0000EE] text-yellow-300 border-2 border-yellow-300 px-8 py-3 rounded-full hover:bg-yellow-300 hover:text-[#0000EE] transition-colors">
                  DOWNLOAD THE WHITEPAPER
                </button>
              </div>
            </div>
          </div>

          {/* Etymology Section */}
          <div className="max-w-7xl mx-auto mt-20">
            <h2 className="text-white text-3xl font-bold mb-4">Meme Etymology</h2>
            <p className="text-white text-xl mb-4">
              Derived from AMOG ("alpha male of group").
            </p>
            <p className="text-white text-xl mb-8">
              The word first appeared on fitness forums and imageboards around 2016 and was popularized around 2021.
            </p>

            <h2 className="text-white text-3xl font-bold mb-4">Verb</h2>
            <p className="text-yellow-300 italic mb-2">
              mog (third-person singular simple present: mogs, present participle: mogging, simple past and past participle: mogged)
            </p>
            <ol className="text-white text-xl space-y-2 list-decimal pl-6">
              <li className="italic">
                (transitive, stative, Internet slang) To be significantly more attractive than (someone or something); to dominate in appearance.
              </li>
              <li className="italic">
                (transitive, Internet slang, by extension) To be superior to in general.
              </li>
            </ol>
          </div>

          {/* Joycat Section */}
          <div className="max-w-7xl mx-auto mt-32">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="md:w-3/5">
                <h2 className="text-white text-4xl font-bold mb-4 uppercase font-pixel">What's with the joycat?</h2>
                <p className="text-white text-lg mb-8 font-pixel">
                  The Joycat is something that the community felt perfectly captured
                  the idea and mentality of Mog. It does not cope, seethe, or worry
                  about what others think of it. It is simply having fun and dismissing
                  any negativity.
                </p>
                <Link 
                  href="/memes" 
                  className="inline-block bg-transparent border-2 border-yellow-300 text-yellow-300 px-8 py-3 rounded-full hover:bg-yellow-300 hover:text-[#0000EE] transition-colors font-pixel"
                >
                  BROWSE THE MEMES
                </Link>
              </div>
              <div className="md:w-2/5 flex justify-center md:justify-end">
                <img 
                  src="/mogcoin/mogmog.png" 
                  alt="Joycat Mascot" 
                  className="w-72 h-72 md:w-96 md:h-96 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Buy MOG Section */}
          <div className="max-w-7xl mx-auto mt-32 text-center pb-20">
            <h2 className="text-white text-6xl font-bold mb-8">
              <span className="text-white">BUY $MOG</span>
              <span className="text-yellow-300"> TODAY</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <img 
                src="/mogcoin/buymog.png" 
                alt="MOG Purchase Interface" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Footer */}
          <footer className="max-w-7xl mx-auto mt-20 text-center pb-8">
            <p className="text-white/80 italic text-sm px-4">
              LEGAL DISCLAIMER: $MOG is a crypto coin with no intrinsic value or expectation of financial
              return. Just because some people are getting ridiculously rich buying crypto doesn't mean you
              definitely will. MOG is to be used strictly for getting laid and for entertainment purposes only.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <Link href="https://etherscan.io" target="_blank">
                <img src="/mogcoin/etherscan-logo.png" alt="Etherscan" className="h-8" />
              </Link>
              <Link href="https://coinmarketcap.com" target="_blank">
                <img src="/mogcoin/coinmarketcap.png" alt="CoinMarketCap" className="h-8" />
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}

