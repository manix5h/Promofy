import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";
import { useState } from "react";
import axios from "axios";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

// React Form


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const service_id = "service_buddpdh";
    const template_id = "template_99j6fc8";
    const publicKey = "n0KtA3IgvYT1pRPLG";


console.log("hii")
console.log(name)
    const data = {
      service_id: service_id,
      template_id: template_id,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        subject:subject,
        to_name: "Promofy",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("")
    } catch (e) {
      console.log(e);
      console.log("hiiii")
    }
  };
 

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
        Contact
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Reach out for a new project or just say hello
      </p>

      <div className="lg:flex gap-6">
        {/* map */}
        <div
          data-aos="fade-up"
          className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600 mb-7 lg:mb-0"
        >
          <div className="flex gap-3 mt-3 mb-12">
            <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <IoLocationOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Address
              </h2>
              <p className="text-sm text-slate-800">
              Shastri Nagar, Jaipur, Rajsathan 302016
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-12">
            <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <IoCallOutline />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Call Us
              </h2>
              <p className="text-sm text-slate-800">+91 9783724372</p>
            </div>
          </div>

          <div className="flex gap-5 mb-12">
            <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <TfiEmail />
            </div>
            <div>
              <h2 className="lg:text-xl text-[#7A6960] font-semibold">
                Email Us
              </h2>
              <p className="text-sm text-slate-800">promofy.pvt@gmail.com</p>
            </div>
          </div>

          <div className="lg:w-full lg:h-72">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14997.447787690307!2d75.79365760309075!3d26.948870570662486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3dc0a774a75%3A0xf7dbda973d65d18f!2sShastri%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e1!3m2!1sen!2sin!4v1737568582302!5m2!1sen!2sin"             loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            
          </div>
        </div>
     

        {/* form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600"
        >
          <div >
            <div className="md:flex gap-6">
              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                 
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
                  />
                  
                </div>
              </div>

              <div className="md:w-[50%]">
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                   onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                    
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
                  />
                  {email}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
               onChange={(e)=>{
                setSubject(e.target.value)
              }}
             
                type="text"
                id="subject"
                placeholder="Your subject"
                className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
              />
              {subject}
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
               onChange={(e)=>{
                setMessage(e.target.value)
              }}
                
                id="message"
                placeholder="Enter your message"
                className="w-full h-60 p-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none resize-none"
              >  </textarea>
              {message}
            </div>

            <div className="flex justify-center m-3">
            <button onClick={handleSubmit} className="bg-orange-600 hover:bg-orange-500 hover:shadow hover:shadow-orange-500 text-lg text-slate-50 rounded-3xl px-4 py-2 w-fit transition-all duration-300">
      Send Message
    </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



