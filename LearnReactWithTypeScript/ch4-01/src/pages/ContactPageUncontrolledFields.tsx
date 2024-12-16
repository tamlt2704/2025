import React, { FormEvent, useState } from 'react';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};
const fieldStyle = 'flex flex-col mb-2';

export default function Contactpage() {
  const [contact, setContact] = useState<Contact>({
    name: '',
    email: '',
    reason: '',
    notes: '',
  });
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log('submited', contact);
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3"> Contact us </h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can</p>
      <form onSubmit={handleSubmit}>
        <div className={fieldStyle}>
          <label htmlFor="name"> Your name </label>
          <input
            className="border-solid border-2 border-red-500"
            type="text"
            id="name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>

        <div className={fieldStyle}>
          <label htmlFor="email"> Your Email </label>
          <input
            className="border-solid border-2 border-red-500"
            type="text"
            id="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason"> Reason for contact </label>
          <select
            className="border-solid border-2 border-red-500"
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          >
            <option value=""></option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" className="border-solid border-2 border-red-500" />
        </div>
        <div className={fieldStyle}>
          <button type="submit" className="mt-2 h-10 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}