export default function Home() {
  return (
    <div className="min-h-screen flex flex-col py-8 sm:py-12 md:py-16 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 justify-center font-serif">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Hi, I&apos;m Kevin 👋
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Message me at{" "}
            <a
              className="text-blue-600 hover:text-blue-700 transition-colors"
              href="mailto:me@kevintlu.com"
            >
              me@kevintlu.com
            </a>
            {" or "}
            <a
              className="text-blue-600 hover:text-blue-700 transition-colors"
              href="https://cal.com/kevinlu"
            >
              schedule a call
            </a>
            . <br className="hidden sm:block" /> If you&apos;re in tech &
            interested in doing an interview, reach out!
          </p>
        </div>

        <div className="flex items-center justify-center mb-12 sm:mb-16 select-none">
          <div className="h-px bg-gray-200 flex-grow"></div>
          <div className="px-4 text-gray-400 text-xl sm:text-2xl font-light tracking-widest">
            ***
          </div>
          <div className="h-px bg-gray-200 flex-grow"></div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
            Recent Interviews
          </h2>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-4 sm:p-6 rounded-xl">
            <img
              src="/thumbnails/Eric Interview.png"
              alt="Eric Interview"
              className="w-lg object-cover rounded-lg shadow-md"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">
                Eric Zhu
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                April 21, 2025 – In this episode, I sat down with 17-year-old
                Eric Zhu – founder of{" "}
                <a
                  href="https://techcrunch.com/2024/07/22/17-year-old-eric-zhus-startup-was-built-in-a-high-school-bathroom-now-its-raised-2-3-million-and-is-emerging-from-stealth/"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Aviato
                </a>
                , a startup building the Bloomberg terminal for private markets,
                which raised $2.3M from 8VC, Soma Capital, and SoftBank.
                He&apos;s also a partner at Bachmanity Capital, a $20M venture
                fund, and the creator of the sport{" "}
                <a
                  href="https://www.spermracing.com/"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  sperm racing
                </a>{" "}
                (yes, really). We talk about his upcoming event on April 25th,
                with 4,000 spectators at the LA Center Studios.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-4 sm:p-6 rounded-xl">
            <img
              src="/thumbnails/Zeqi Interview.png"
              alt="Zeqi Interview"
              className="w-lg object-cover rounded-lg shadow-md"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">
                Zeqi Xiao
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                April 22, 2025 – In this episode, I spoke with Zeqi Xiao, a PhD
                researcher at MMLab@NTU, about his groundbreaking work on{" "}
                <a
                  href="https://xizaoqu.github.io/worldmem/"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  WORLDMEM
                </a>
                , a framework for long-term world simulation with memory. We
                explored how generative models are evolving to not just imagine,
                but remember and build coherent virtual worlds over time.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-4 sm:p-6 rounded-xl">
            <img
              src="/thumbnails/Arthur Interview.png"
              alt="Arthur Interview"
              className="w-lg object-cover rounded-lg shadow-md"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">
                Arthur Conmy
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                April 18, 2025 – April 18, 2025 – In this episode, I hosted an
                Ask-Me-Anything with over 100 RSVPs. Our guest, Arthur Conmy, is
                a leading AI safety researcher at Google DeepMind and the
                University of Cambridge, known for pioneering automated circuit
                discovery and training over 400 sparse autoencoders for{" "}
                <a
                  href="https://deepmind.google/discover/blog/gemma-scope-helping-the-safety-community-shed-light-on-the-inner-workings-of-language-models/"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Gemma Scope
                </a>
                . Whether you&apos;re new to AI or deeply into mechanistic
                interpretability, come learn how he&apos;s helping lift the lid
                on black-box LLMs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
