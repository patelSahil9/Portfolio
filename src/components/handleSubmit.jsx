const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
    if (!serviceId || !templateId || !publicKey) {
      alert("Email service is not configured. Check your .env file.");
      setLoading(false);
      return;
    }
  
    const payload = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };
  
    console.log("Sending payload:", payload);
  
    emailjs.send(serviceId, templateId, payload, publicKey)
      .then(() => {
        setLoading(false);
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("❌ EmailJS send error:", error);
        alert("Something went wrong: " + (error.text || error.message));
      });
  };
  