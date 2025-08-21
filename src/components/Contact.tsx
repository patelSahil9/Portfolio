import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";  
import { slideIn } from "../utils/motion";
import meImg from "./me.jpg";
// import { BallCanvas } from "./canvas";
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const apiBase = import.meta.env.VITE_API_BASE || "";
    const url = `${apiBase}/api/send-email`;

    const payload = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.success) {
          throw new Error(data?.error || `HTTP ${res.status}`);
        }
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Resend send error:", error);
        alert(`Something went wrong sending your message: ${error.message}`);
      });
  };

  return (
    <div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 overflow-hidden bg-transparent">
      <div className="flex flex-1 flex-col md:flex-row bg-black-100 p-8 rounded-2xl w-full">
        {/* Contact Form Part */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          variants={slideIn("left", "tween", 0.2, 1)}
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* meImg Part */}
      </div>
        <motion.div
          className="flex-1 flex items-center justify-center  mt-10 md:mt-5"
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-1 ring-4 ring-[#915eff] shadow-[0_0_20px_rgba(145,94,255,0.35)] flex items-center justify-center">
            <img
              src={meImg}
              alt="Your portrait"
              className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
        </motion.div>
    </div>
  );
};

export default Contact;