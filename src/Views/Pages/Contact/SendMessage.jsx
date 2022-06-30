import React from "react";
import { useForm } from "react-hook-form";
import background from "../../../Assets/Images/Contact/contact_img-1.jpg";

const SendMessage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="container mx-auto px-3 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-6xl font-medium capitalize mb-4">
            Send us a message
          </h2>
          <p className="mb-4">
            If you have any questions or need more information, please use the
            form below to send us a message.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full border-4 border-gray-300 outline-none py-2 px-3 mb-6 focus:border-black transition-all"
              {...register("yourName", { required: true, maxLength: 20 })}
              placeholder="Your Name"
            />
            <input
              className="w-full border-4 border-gray-300 outline-none py-2 px-3 mb-6 focus:border-black transition-all"
              {...register("yourEmail", { required: true })}
              placeholder="Your Email"
            />
            <textarea
              rows="7"
              className="w-full border-4 border-gray-300 outline-none py-2 px-3 mb-6 resize-none focus:border-black transition-all"
              type="number"
              {...register("message", { required: true })}
              placeholder="Your Message"
            />
            <input className="btn-secondary hover:bg-black" type="submit" />
          </form>
        </div>
        <div style={BG}>2</div>
      </div>
    </div>
  );
};

export default SendMessage;

const BG = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "580px",
};
