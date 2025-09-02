import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#1a1a1a] text-stone-400 py-16 px-6 md:px-14 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading + big section number */}
        <div className="relative">
          <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Get In Touch.
          </h2>
        </div>

        {/* === 3 Column Content (Description / Follow / Contact) === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Description */}
          <div className="lg:col-span-6">
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              illum quasi facere libero, fugiat laboriosam possimus amet
              consectetur adipisicing elit reprehenderit eveniet tempore
              quisquam ipsa id esse. Facere ratione dignissimos.
            </p>
          </div>

          {/* Follow Me */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Facebook
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Twitter
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Instagram
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Dribbble
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Hostinger
              </li>
            </ul>
          </div>

          {/* Contact Me */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <p className="text-gray-300 mb-2 hover:text-white transition cursor-pointer">
              im.computer.engineeer@gmail.com
            </p>
            <p className="text-gray-300 hover:text-white transition cursor-pointer">
              +88 01817 422784
            </p>
          </div>
        </div>

        {/* === Bottom Buttons Row (2 columns) === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
          <div className="lg:col-span-6">
            <button
              className="w-full bg-[#D5411D] border border-[#D5411D] hover:bg-[#c13a18] text-stone-300 hover:text-stone-100 transition duration-300 py-5 uppercase tracking-[0.25em] text-sm font-semibold"
              type="button"
            >
              Message Me
            </button>
          </div>
          <div className="lg:col-span-6">
            <a href="#" className=""
            download="">
              {" "}
              <button
                className="w-full border border-gray-500 hover:bg-white hover:text-black transition duration-300 py-5 uppercase tracking-[0.25em] text-sm font-semibold"
                type="button"
              >
                Get My CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
