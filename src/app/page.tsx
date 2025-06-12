export default function Home() {
  return (
    <div className="min-h-screen flex flex-col py-8 sm:py-12 md:py-16 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 justify-center font-serif">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I&apos;m Kevin
            </h1>
            <img
              src="/photos/kevin sticker.png"
              alt="Kevin Sticker"
              className="w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg border-2 border-white shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300 flex-shrink-0"
              style={{
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
              }}
            />
          </div>
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
            . <br /> Currently researching how to build more interpretable
            architectures!
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
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
              Kevin @ CHAI Workshop 2025!
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <img
                src="/photos/kevin with poster.jpeg"
                alt="Kevin with poster at CHAI Workshop 2025"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/photos/kevin at chai.jpeg"
                alt="Kevin at CHAI Workshop 2025"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="/photos/monterey photo.jpg"
                alt="Kevin at CHAI Workshop 2025"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mb-12 sm:mb-16 select-none">
            <div className="h-px bg-gray-200 flex-grow"></div>
            <div className="px-4 text-gray-400 text-xl sm:text-2xl font-light tracking-widest">
              ***
            </div>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
            Recent Interviews
          </h2>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-4 sm:p-6 rounded-xl">
            <img
              src="/thumbnails/Buck Interview.png"
              alt="Buck Interview"
              className="w-lg object-cover rounded-lg shadow-md"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">
                Buck Shlegeris
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                June 9, 2025 – In this episode, I spoke with Buck Shlegeris, CEO
                of{" "}
                <a
                  href="https://redwoodresearch.org/"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Redwood Research
                </a>{" "}
                and leading AI safety researcher. We explored his work on AI
                control approaches for managing potentially misaligned AI
                systems – including the{" "}
                <a
                  href="https://www.anthropic.com/research/alignment-faking"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Alignment Faking in LLMs
                </a>{" "}
                paper published with Anthropic – discussed his perspectives on
                AI timelines and capabilities, and dove into some juicy gossip
                about his perspective on mechanistic interpretability.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-4 sm:p-6 rounded-xl">
            <img
              src="/thumbnails/Nikita Interview.jpg"
              alt="Nikita Interview"
              className="w-lg object-cover rounded-lg shadow-md"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">
                Nikita Dhawan
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                May 19, 2025 – In this episode, we spoke with Nikita Dhawan, a
                PhD student at the University of Toronto, about her
                groundbreaking discoveries in federated learning through FedFish
                and connecting the medical industry with AI through NATURAL. We
                explored her expertise in federated learning and its
                improvements versus the old, and we journeyed with her through
                her passion of improving medical efficiency using LLMs to
                interpret texts on medical forums.
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
