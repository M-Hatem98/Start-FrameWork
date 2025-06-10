export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white text-center">
      <div className="container mx-auto py-30 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Location */}
        <div>
          <h3 className="text-3xl font-bold mb-6">LOCATION</h3>
          <p className="text-xl mb-4">2215 John Daniel Drive</p>
          <p className="text-xl mb-4">Clark, MO 65243</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-3xl font-bold mb-6">AROUND THE WEB</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="border border-white rounded-full py-3 px-5 hover:bg-white hover:text-[#2C3E50] transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="border border-white rounded-full py-3 px-4 hover:bg-white hover:text-[#2C3E50] transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="border border-white rounded-full py-3 px-4 hover:bg-white hover:text-[#2C3E50] transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="border border-white rounded-full py-3 px-4 hover:bg-white hover:text-[#2C3E50] transition">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-3xl font-bold mb-4">ABOUT FREELANCER</h3>
          <p className="text-xl">
            Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
        </div>
      </div>

      <div className="bg-[#1A252F] py-8">
        <p className="text-2xl text-white">&copy; Your Website 2025 | <a className="text-cyan-800 font-black" href="https://m-hatem98.github.io/Mohammed-Hatem/">Mohammed Hatem</a></p>
      </div>
    </footer>
  );
}
