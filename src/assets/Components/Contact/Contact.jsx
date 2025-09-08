import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#1a1a1a] text-stone-400 px-8 py-40 mt-10 md:mt-20 lg:mt-32 md:px-14 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading + big section number */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h2 className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-stone-200 font-Inter">
            Get In Touch.
          </h2>
        </motion.div>

        {/* === 3 Column Content (Description / Follow / Contact) === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 ">
          {/* Description */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <p
              className="text-stone-400
             leading-relaxed max-w-2xl text-xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              illum quasi facere libero, fugiat laboriosam possimus amet
              consectetur adipisicing elit reprehenderit eveniet tempore
              quisquam ipsa id esse. Facere ratione dignissimos.
            </p>
          </motion.div>

          {/* Follow Me */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl text-stone-200 font-semibold mb-4">
              Follow Me
            </h3>
            <ul className="space-y-2 text-stone-400 text-lg">
              <li>
                <a
                  href="https://github.com/Developer-Shuvo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition cursor-pointer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mdnazmul.hasanshuvo.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition cursor-pointer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/SHUVO_1010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition cursor-pointer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nazmul_hasan_shuvooo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition cursor-pointer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+8801817422784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition cursor-pointer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Me */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl text-stone-200 font-semibold mb-4">
              Contact Me
            </h3>
            <a className="text-stone-400 mb-2 hover:text-stone-200 transition cursor-pointer text-lg ">
              im.computer.engineeer@gmail.com
            </a>
            <p className="text-stone-400  transition cursor-pointer text-lg">
              +88 01817 422784
            </p>
          </motion.div>
        </div>

        {/* === Bottom Buttons Row (2 columns) === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <a href="https://wa.me/+8801817422784" target="_blank">
              <button
                className="w-full bg-[#D5411D] border border-[#D5411D] hover:bg-[#c13a18] text-stone-300 hover:text-stone-100 transition duration-300 py-5 uppercase tracking-[0.25em] text-sm font-semibold"
                type="button"
              >
                Message Me
              </button>
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <a href="#" className="" download="">
              {" "}
              <a href="https://drive.google.com/file/d/18OKI4hFKohKrQsPcdgVrHPctd0Qr4DSL/view?usp=sharing">
                {/* Cv */}
                <button
                  className="w-full border border-gray-500 hover:bg-white hover:text-black transition duration-500 py-5 uppercase tracking-[0.25em] text-sm font-semibold"
                  type="button"
                >
                  Get My CV
                </button>
              </a>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
