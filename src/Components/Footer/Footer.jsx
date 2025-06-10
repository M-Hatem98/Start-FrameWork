export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white text-center">
      <div className="container mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Location */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">LOCATION</h3>
          <p className="text-base md:text-xl mb-2">2215 John Daniel Drive</p>
          <p className="text-base md:text-xl mb-2">Clark, MO 65243</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">AROUND THE WEB</h3>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="#"
              className="border border-white rounded-full py-3 px-5 hover:bg-white hover:text-[#2C3E50] transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="border border-white rounded-full py-3 px-4 hover:bg-white hover:text-[#2C3E50] transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="border border-white rounded-full py-3 px-4 hover:bg-white hover:text-[#2C3E50] transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="border border-white rounded-full py-3 px-4 hover:bg-white hover:text-[#2C3E50] transition"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">ABOUT FREELANCER</h3>
          <p className="text-base md:text-xl leading-relaxed">
            Freelance is a free to use, licensed React & Tailwind theme created by <a
            className="text-cyan-800 font-black"
            href="https://m-hatem98.github.io/Mohammed-Hatem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mohammed Hatem
          </a>
          </p>
        </div>
      </div>

      <div className="bg-[#1A252F] py-6 px-4">
        <p className="text-sm md:text-2xl text-white">
          &copy; Your Website 2025 |{" "}
          <a
            className="text-cyan-800 font-black"
            href="https://m-hatem98.github.io/Mohammed-Hatem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mohammed Hatem
          </a>
        </p>
      </div>
    </footer>
  );
}
