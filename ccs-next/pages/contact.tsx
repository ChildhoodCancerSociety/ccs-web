import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-white flex-grow flex flex-col justify-center">
        <div className="container m-auto">
          <h1 className="text-slate-900 text-4xl text-center font-bold py-6">Contact Us!</h1>
          <div className="flex flex-row justify-around text-slate-900 py-12">
            <div className="text-center">
              <h3 className="text-xl font-bold">Call Us</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Write Us</h3>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">Email Us</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-purple-900 flex-shrink">
        <div className="container m-auto text-center flex flex-col justify-center">
          <form className="py-8 w-full">
            <input type="text" className="bg-slate-50 w-[50%] py-2 px-3 rounded-md m-4 text-slate-900" placeholder="Name" />
            <input type="email" className="bg-slate-50 w-[50%] py-2 px-3 rounded-md m-4 text-slate-900" placeholder="Email" />
            <input type="tel" className="bg-slate-50 w-[50%] py-2 px-3 rounded-md m-4 text-slate-900" placeholder="Phone" />
            <textarea className="bg-slate-50 w-[50%] py-2 px-3 rounded-md m-4 text-slate-900" placeholder="Your message" />
            <button className="block m-auto bg-green-600 py-2 px-4 rounded-md drop-shadow-md" type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
