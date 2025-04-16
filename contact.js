import React, { useState } from "react";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappLink = `https://wa.me/000000?text=${encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.open(whatsappLink, "_blank");
    // Redirige vers la page d'accueil après l'envoi
    window.location.href = "/home";
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f4f4f4" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "20px 30px",
          borderRadius: "10px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Contactez-moi</h1>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            resize: "none",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "linear-gradient(135deg, #2575fc, #6a11cb)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "linear-gradient(135deg, #6a11cb, #2575fc)";
            e.target.style.transform = "scale(1)";
          }}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

