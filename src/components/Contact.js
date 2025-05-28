import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const neonPink = "#ff4ccd";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError(null);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      const serviceID = "service_lah8zph";
      const templateID = "template_ingol4u";
      const userID = "cfl4QnnQ42q9roEVO";

      emailjs
        .send(serviceID, templateID, formData, userID)
        .then(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          setTouched({});
        })
        .catch((err) => {
          setIsSubmitting(false);
          setSubmitError("Oops! Something went wrong. Please try again later.");
          console.error("EmailJS error:", err);
        });
    }
  };

  const styles = {
    section: {
      boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
      width: "90%",
      maxWidth: "600px",
      margin: "4rem auto",
      padding: "2.5rem 1.5rem",
      backgroundColor: "#121212",
      color: "#fff",
      borderRadius: "12px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center",
    },
    heading: {
      fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)",
      marginBottom: "1.2rem",
    },
    pink: {
      color: neonPink,
    },
    text: {
      fontSize: "clamp(1rem, 2vw, 1.1rem)",
      marginBottom: "1rem",
      color: "#ccc",
      lineHeight: 1.6,
    },
    form: {
      marginTop: "1rem",
      textAlign: "left",
    },
    label: {
      display: "block",
      marginBottom: "0.3rem",
      fontWeight: "600",
      color: "#eee",
    },
    input: {
      width: "100%",
      padding: "0.5rem 0.75rem",
      marginBottom: "1rem",
      borderRadius: 6,
      border: `2px solid #333`,
      backgroundColor: "#222",
      color: "#fff",
      fontSize: "1rem",
      transition: "border-color 0.3s ease",
    },
    inputError: {
      borderColor: neonPink,
      outline: `2px solid ${neonPink}`,
    },
    textarea: {
      width: "100%",
      minHeight: "120px",
      padding: "0.5rem 0.75rem",
      borderRadius: 6,
      border: `2px solid #333`,
      backgroundColor: "#222",
      color: "#fff",
      fontSize: "1rem",
      resize: "vertical",
      transition: "border-color 0.3s ease",
      marginBottom: "1rem",
    },
    errorText: {
      color: neonPink,
      fontSize: "0.875rem",
      marginTop: "-0.8rem",
      marginBottom: "0.8rem",
      fontWeight: "600",
    },
    button: {
      backgroundColor: neonPink,
      color: "#121212",
      border: "none",
      padding: "0.75rem 2rem",
      fontSize: "1.1rem",
      borderRadius: 8,
      fontWeight: "700",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      width: "100%",
      marginTop: "0.5rem",
    },
    buttonDisabled: {
      backgroundColor: "#8b8b8b",
      cursor: "not-allowed",
    },
    successMessage: {
      marginTop: "1rem",
      color: "#4BB543",
      fontWeight: "700",
      fontSize: "1rem",
    },
    errorMessage: {
      marginTop: "1rem",
      color: "#ff4c4c",
      fontWeight: "700",
      fontSize: "1rem",
    },
    email: {
      display: "inline-block",
      fontSize: "1rem",
      color: neonPink,
      textDecoration: "none",
      marginBottom: "1.5rem",
      wordBreak: "break-word",
    },
    social: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1.2rem",
      marginTop: "1.5rem",
    },
    socialLink: {
      color: neonPink,
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "1rem",
      transition: "color 0.3s ease",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.pink}>Get</span> In Touch
      </h2>
      <p style={styles.text}>
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <a href="mailto:viharika05@gmail.com" style={styles.email}>
        viharika05@gmail.com
      </a>

      <form onSubmit={handleSubmit} noValidate style={styles.form} aria-label="Contact form">
        <label htmlFor="name" style={styles.label}>
          Name <span aria-hidden="true" style={{ color: neonPink }}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          style={{
            ...styles.input,
            ...(errors.name && touched.name ? styles.inputError : {}),
          }}
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          placeholder="Your full name"
        />
        {errors.name && touched.name && (
          <p id="name-error" style={styles.errorText}>
            {errors.name}
          </p>
        )}

        <label htmlFor="email" style={styles.label}>
          Email <span aria-hidden="true" style={{ color: neonPink }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          style={{
            ...styles.input,
            ...(errors.email && touched.email ? styles.inputError : {}),
          }}
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          placeholder="your.email@example.com"
        />
        {errors.email && touched.email && (
          <p id="email-error" style={styles.errorText}>
            {errors.email}
          </p>
        )}

        <label htmlFor="message" style={styles.label}>
          Message <span aria-hidden="true" style={{ color: neonPink }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          style={{
            ...styles.textarea,
            ...(errors.message && touched.message ? styles.inputError : {}),
          }}
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
          placeholder="Your message here..."
        />
        {errors.message && touched.message && (
          <p id="message-error" style={styles.errorText}>
            {errors.message}
          </p>
        )}

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isSubmitting || Object.keys(validate()).length > 0
              ? styles.buttonDisabled
              : {}),
          }}
          aria-busy={isSubmitting}
          disabled={isSubmitting || Object.keys(validate()).length > 0}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitSuccess && (
          <p role="alert" style={styles.successMessage}>
            Thanks for reaching out! I’ll get back to you soon.
          </p>
        )}
        {submitError && (
          <p role="alert" style={styles.errorMessage}>
            {submitError}
          </p>
        )}
      </form>

      <div style={styles.social}>
        <a
          href="https://github.com/viharika-22"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.socialLink}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ch-viharika-145301199/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.socialLink}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
