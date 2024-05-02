import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Title from './sections/Title';
import useAnimateIn from '../hooks/useAnimateIn';
import { buttonAnimation } from '../animation';
import Footer from './sections/Footer';

export default function Contact({ inView }) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState('Send');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('erors', errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');

        //Reset form fields
        setFullname('');
        setEmail('');
        setMessage('');
        setSubject('');
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');

      //Reset form fields
      setFullname('');
      setEmail('');
      setMessage('');
      setSubject('');
    }
    console.log(fullname, email, subject, message);
  };

  // Page title
  const textHdr = 'GET IN TOUCH';

  // Label animation
  const {
    ref: labelRef,
    ctrls: labelCtrls,
    vars: labelVars,
  } = useAnimateIn({
    threshold: 0.4,
    delay: 0.5,
  });

  // input animation
  const { vars: inputVars } = useAnimateIn({
    delay: 0.75,
  });

  return (
    <motion.div
      layout="true"
      style={
        inView ? { opacity: 1 } : { position: 'sticky', top: '6%', zIndex: 4 }
      }
      className={'bg-purple w-[86%] m-auto p-2 rounded-lg'}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="shadow-xl flex flex-col px-8 py-8 lg:w-3/4 lg:ml-auto lg:mr-auto"
        ref={labelRef}
        initial="hidden"
        animate={labelCtrls}
      >
        <Title
          title={textHdr}
          className="font-monoton text-3xl p-4 text-center"
        />
        <motion.label
          htmlFor="fullname"
          className="text-gray-200 font-light mt-8 dark:text-gray-50"
          variants={labelVars}
        >
          Name<span className="text-gray-300 dark:text-gray-50">*</span>
        </motion.label>
        <motion.input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-[#222]"
          variants={inputVars}
        />
        {errors?.fullname && (
          <p className="text-yellow-600">Name cannot be empty.</p>
        )}

        <motion.label
          htmlFor="email"
          className="text-gray-200 font-light mt-4 dark:text-gray-50"
          variants={labelVars}
        >
          E-mail<span className="text-gray-300">*</span>
        </motion.label>
        <motion.input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-[#222]"
          variants={inputVars}
        />
        {errors?.email && (
          <p className="text-yellow-600">Email cannot be empty.</p>
        )}

        <motion.label
          htmlFor="subject"
          className="text-gray-200 font-light mt-4 dark:text-gray-50"
          variants={labelVars}
        >
          Subject<span className="text-gray-300">*</span>
        </motion.label>
        <motion.input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-[#222]"
          variants={inputVars}
        />
        {errors?.subject && (
          <p className="text-yellow-600">Subject cannot be empty.</p>
        )}
        <motion.label
          htmlFor="message"
          className="text-gray-200 font-light mt-4 dark:text-gray-50"
          variants={labelVars}
        >
          Message<span className="text-gray-300">*</span>
        </motion.label>
        <motion.textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-[#222]"
          variants={inputVars}
        ></motion.textarea>
        {errors?.message && (
          <p className="text-yellow-600">Message body cannot be empty.</p>
        )}
        <div className="flex flex-row items-center justify-start">
          <motion.button
            type="submit"
            className="px-10 mt-8 py-2 bg-honey text-[#222] font-light rounded-md text-lg flex flex-row items-center"
            variants={buttonAnimation}
          >
            {buttonText}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-cyan-500 ml-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
        </div>
        <div className="text-left">
          {showSuccessMessage && (
            <p className="text-green-500 font-semibold text-sm my-2">
              Thankyou! Your Message has been delivered.
            </p>
          )}
          {showFailureMessage && (
            <p className="text-grey">
              Oops! Something went wrong, please try again.
            </p>
          )}
        </div>
      </motion.form>
      <Footer />
    </motion.div>
  );
}
