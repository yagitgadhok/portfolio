import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
    setIsSubmitted(true);
    reset(); // Clear form after submission
  };

  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6 w-full">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#111]  rounded-lg shadow-lg">
        {/* Left Section - Image & Contact Info */}
        <div className="relative">
          <img
            src="/assets/modern-monitor-elegant-table.jpg" // Replace with your image
            alt="Workspace"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg">
            <p className="mt-2 text-sm">
              📧 <span className="font-medium">yagitgadhok05@gmail.com</span>
            </p>
            <p className="text-sm">📍 Delhi, India</p>
            <div className="flex gap-4 mt-3">
              <a href="https://github.com/yagitgadhok" target="_blank">
                <FaGithub className="text-xl hover:text-purple-400 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/yagitgadhok/"
                target="_blank"
              >
                <FaLinkedin className="text-xl hover:text-blue-400 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Let's Have a Chat
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Leave your email and I will get back to you within 24 hours.
          </p>

          {isSubmitted && (
            <div className="bg-green-600 text-white p-3 mb-4 text-center rounded">
              ✅ Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 bg-[#222] border border-gray-700 rounded"
              />
              {errors.name && (
                <p className="text-red-400 text-sm">
                  {errors.name?.message as string}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email",
                  },
                })}
                className="w-full p-3 bg-[#222] border border-gray-700 rounded"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="w-full p-3 bg-[#222] border border-gray-700 rounded"
              />
              {errors.subject && (
                <p className="text-red-400 text-sm">
                  {errors.subject.message as string}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 bg-[#222] border border-gray-700 rounded h-24"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-200 to-slate-700 text-white py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Submit ➤
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
