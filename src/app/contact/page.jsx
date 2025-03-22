"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
              onSubmit={sendEmail}
              ref={form}
              className="min-h-[50vh] w-full lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 sm:gap-6 justify-center p-4 sm:p-8 md:p-12 lg:p-24"
            >
              <span>Dear Manishcad.Dev,</span>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b-2 border-b-black outline-none resize-none"
                name="user_message"
                required
              />
              <span>My mail address is:</span>
              <input
                name="user_email"
                type="email"
                className="w-full bg-transparent border-b-2 border-b-black outline-none"
                required
              />
              <span>Regards</span>
              <button className="w-full bg-purple-200 rounded font-semibold text-gray-600 p-4">
                Send
              </button>
              {success && <p className="text-green-700 text-bold text-2xl">Thanks,i will reach you as soon as possible</p>}
              {error && <p className="text-red-700 text-bold text-2xl">Sorry Something Went Wrong...</p>}
        </form>

      </div>
    </motion.div>
  );
};

export default ContactPage;
