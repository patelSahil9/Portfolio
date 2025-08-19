import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";  
import BannerBackground from "./canvas/BannerBackground";
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

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    const isPlaceholder = [serviceId, templateId, publicKey].some(
      (v) => !v || /REPLACE_WITH/i.test(v)
    );

    if (!serviceId || !templateId || !publicKey || isPlaceholder) {
      console.error("EmailJS env vars missing: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY");
      alert(
        "Email service is not configured. Please add your EmailJS keys to .env and restart the dev server."
      );
      setLoading(false);
      return;
    }

    const payload = {
      from_name: form.name,
      to_name: "Sahil Patel",
      from_email: form.email,
      reply_to: form.email,
      message: form.message,
      // Provide alternative/common EmailJS template variable names to avoid 400s
      user_name: form.name,
      user_email: form.email,
      user_message: form.message,
      to_email: "psahil1209@gmail.com",
    } as Record<string, string>;

    emailjs.send(serviceId, templateId, payload, publicKey)
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS send error:", error);
          const errorMsg = (error && (error.text || error.message)) || "Unknown error";
          alert(`Something went wrong sending your message: ${errorMsg}`);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <div className="flex justify-center mb-6">
            <img
              src={meImg}
              alt="Your portrait"
              className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
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
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <BannerBackground />
          {/* <BallCanvas icon={meImg} /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;