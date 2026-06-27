'use client';
import { useState } from 'react';
import { Meteors } from "@/components/ui/meteors";

export default function Contact() {
  const [msgSent, setMsgSent] = useState({ email: '', message: '' });

  function sendMsg(e: React.FormEvent) {
    e.preventDefault();
    alert(`Email: ${msgSent.email}\nMessage: ${msgSent.message}`);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 flex flex-col items-center justify-center px-4 py-20">

      {/* Meteor effect anchored to this container */}
      <Meteors number={100} className="absolute inset-0" />

      {/* Page content above meteors */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        <p className="mt-4 text-base text-gray-300 max-w-lg leading-relaxed">
          We&apos;re here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your musical journey.
        </p>

        <input
          type="email"
          className="mt-8 p-4 w-full bg-slate-800 border border-slate-700 rounded-lg
            text-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
            transition-colors"
          placeholder="Your email address"
          value={msgSent.email}
          onChange={(e) => setMsgSent({ ...msgSent, email: e.target.value })}
        />

        <textarea
          className="mt-4 p-4 w-full bg-slate-800 border border-slate-700 rounded-lg
            text-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
            transition-colors resize-none"
          placeholder="Your message"
          rows={6}
          value={msgSent.message}
          onChange={(e) => setMsgSent({ ...msgSent, message: e.target.value })}
        />

        <button
          className="mt-6 px-10 py-3 bg-teal-500 hover:bg-teal-600 active:bg-teal-700
            text-white font-semibold rounded-lg transition-colors text-base"
          onClick={sendMsg}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

