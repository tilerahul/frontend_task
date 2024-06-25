import React, { useState } from "react";

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onSubmit({ name, email });
    setName("");
    setEmail("");
    alert("User Added Successfully !!!")
  };

  return (
    <section className="pt-0">
      <div className="flex justify-center h-auto">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg mt-9">
          <div className="p-6 space-y-4 md:space-y-6">

            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              User Details Form
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 "
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Email
                </label>
                <div className='flex items-center'>
                  <input
                    type='email'
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter Your Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                name='submit'
                className="w-full text-white bg-sky-400 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {!!editMode ? "Edit user" : "Add user"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputHandler;
