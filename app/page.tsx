export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      
      <nav className="flex justify-between items-center px-16 py-6 bg-black text-white">
        <h1 className="text-3xl font-bold">ZILDAN</h1>

        <div className="flex gap-8">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
        </div>
      </nav>

      
      <section className="px-16 py-24">

        <h1 className="text-8xl font-bold mb-8 text-black">
          Hi.
        </h1>

        <p className="text-xl text-black">
          I'm <span className="font-semibold text-black">Zildan Barraq Asyaraf</span>
        </p>

        <p className="text-lg text-black mt-2">
          XI RPL 5 | Frontend Developer
        </p>

        <p className="max-w-2xl mt-10 text-gray-700 text-lg leading-8">
          Saya adalah siswa SMK TELKOM MALANG.
        </p>

      </section>

      {/* About */}
      <section
        id="about"
        className="px-16 py-20 bg-gray-100"
      >
        <h2 className="text-4xl font-bold mb-6 text-black">
          About Me
        </h2>

        <p className="max-w-3xl text-gray-700">
          Saya memiliki minat dalam bidang Web Development,
          khususnya Frontend menggunakan React dan Next.js.
          Saat ini saya terus belajar membangun website modern
          dengan desain yang sederhana namun profesional.
        </p>
      </section>

      <section
        id="about"
        className="px-16 py-20 bg-gray-100"
      >
        <h2 className="text-4xl font-bold mb-6 text-black">
          My approach to learning
        </h2>

        <p className="max-w-3xl text-gray-700">
          Saya belajar secara bertahap, mulai dari teori dasar hingga praktik langsung. Saya percaya bahwa pengalaman mengerjakan proyek nyata, mencoba berbagai solusi, dan terus mengevaluasi hasil merupakan cara terbaik untuk meningkatkan kemampuan dan memperdalam pemahaman.
        </p>
      </section>


      

      <section
        id="about"
        className="px-16 py-20 bg-gray-100"
      >
        <h2 className="text-4xl font-bold mb-6 text-black">
          My roles
        </h2>

        <p className="max-w-3xl text-gray-700">
          API Developer, Frontend Developer.
        </p>
      </section>

      <section
        id="about"
        className="px-16 py-20 bg-gray-100"
      >
        <h2 className="text-4xl font-bold mb-6 text-black">
          Contact
        </h2>

        <p className="max-w-3xl text-gray-700">
          📧 zildan@email.com
        </p>
        <p className="max-w-3xl text-gray-700">
          📍 Malang, Jawa Timur
        </p>
      </section>

    </div>
  );
}