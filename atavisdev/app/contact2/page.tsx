'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData)
    // Send form data to the API route.
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Handle the response, show a confirmation message, or handle errors
  };
    return (
        <div className="flex flex-col justify-center items-center h-screen mx-4 mb-8 mt-20">
            <div className="text-center">
                <h2 className="text-4xl text-white">Don&apos;t be shy!</h2>
                <p className="my-6">Business enquiries only!</p>
                <span>You may address your correspondence to Aiden.</span>
            </div>
            <div className="flex justify-center items-center h-screen">
                <form
                className="w-full max-w-lg"
                onSubmit={handleSubmit}
                >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                        >
                        Name
                        </label>
                        <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                        >
                        Email
                        </label>
                        <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="email"
                        placeholder="john.doe@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Subject
                        </label>
                        <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password"
                        type="text"
                        placeholder="Hello!"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="grid-password"
                        >
                        Message
                        </label>
                        <textarea
                        className="no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                        id="message"
                        name="message"
                        placeholder="Enter your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        ></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Send
                        </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
                </form>
            </div>   
        </div> 
    )
}