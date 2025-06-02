import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    emailjs.sendForm(
      "service_3ht09wb",
      "template_cuy0a9e",
      e.target,
      "eWmklf22qweZEz2Zc"
    );
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center focus:outline-none"
            aria-label={isCollapsed ? "Expand section" : "Collapse section"}
          >
            <span
              className={`bg-blue-500 w-6 h-1 mr-4 rounded-full transition-transform duration-300 ${
                isCollapsed ? "rotate-90" : ""
              }`}
            ></span>
          </button>
          Get In Touch
        </h2>

        {!isCollapsed && (
          <div className="grid md:grid-cols-2 gap-6 mx-6">
            <div>
              <p className="text-lg mb-6 opacity-80">
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs some creative
                touches, let's talk about it!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 text-blue-500" size={20} />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a
                      href="mailto:divyanshukr786@gmail.com"
                      className="hover:text-blue-500 transition-colors"
                    >
                      divyanshukr786@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Linkedin className="mt-1 mr-4 text-blue-500" size={20} />
                  <div>
                    <h4 className="font-bold">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/divyanshu-upadhyay-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                    >
                      linkedin.com/divyanshUpadhyay
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Github className="mt-1 mr-4 text-blue-500" size={20} />
                  <div>
                    <h4 className="font-bold">GitHub</h4>
                    <a
                      href="https://github.com/div-up"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                    >
                      github.com/div-up
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg text-white flex items-center ${
                    isSubmitting
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } transition-colors`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ChevronRight size={20} className="ml-1" />}
                </button>

                {submitStatus === "success" && (
                  <div className="text-green-600 dark:text-green-400 mt-4">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;