import { useState } from "react";
import { useForm } from "react-hook-form";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-[#1B1B1B] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>

        {isSubmitted && (
          <div className="bg-green-100 text-green-800 p-2 mb-4 text-center rounded">
            ✅ Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name?.message as string}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label>Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 border border-gray-300 rounded h-24"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">
                {errors.message.message as string}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
