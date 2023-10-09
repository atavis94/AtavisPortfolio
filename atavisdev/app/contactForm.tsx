'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactForm() {
    const [sent, setSent] = useState(false);
    const [failed, setFailed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Send form data to the API route.
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const data = await response.json();
          setSent(true);
        } else {
          console.error('Error:', response.status, response.statusText);
          setFailed(true);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setFailed(true);
      }   
      setIsSubmitting(false);
  };

    return (

        <div className="text-center lg:py-28 lg:flex-row justify-center" id="PurpleBarContainer">
        <h1 className="text-4xl mt-28 md:mt-0 font-extrabold mb-4">CONTACT</h1> 
        <div className="purple-bar border-black border-1 mt-4position-absolute"></div>
        <div className='mx-2'> 

            <div className="text-center mt-16">
                <h2 className="text-3xl text-white">Looking to get in touch?</h2>
            </div>
            <div className="flex justify-center items-center mt-6 pt-8">
                <form
                className=" max-w-lg md:mb-10 mb-28"
                onSubmit={handleSubmit}
                >
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
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
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
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
                        className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
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
                {!sent && !failed ?  
                <div className="md:flex md:items-center">
                    <div className="md:w-full justify-center items-center">
                        <button
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        disabled={isSubmitting}>
                        Send
                        </button>
                    </div>
                </div>

                : null}
                {sent ? <h1 className='text-2xl font-extrabold'>Message Received! I&apos;ll respond shortly.</h1> : null}
                {failed ? <h1 className='text-2xl font-extrabold'>Hmm, something went wrong. Please contact me via LinkedIn.</h1> : null}
                </form>
            </div> 
          </div>
            
            
        </div> 
    )
}