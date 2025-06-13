import React from 'react';
import '../styles/faqpage.css';

const FAQPage = () => {
  const faqs = [
    {
      question: 'What is Youth Code Camp?',
      answer: 'Youth Code Camp is a community where young programmers come together to learn, create, and share ideas about coding and technology. We organize events like hackathons and workshops, such as HackNoel, HackWithMe, and more. We also support projects from young programmers to help them grow and succeed.',
    },
    {
      question: 'Who can join Youth Code Camp events?',
      answer: 'Youth Code Camp is open to young people aged 14-20 or high schoolers who are interested in coding and technology. Whether you are a beginner or already know how to code, you are welcome to join our community and events!',
    },
    {
      question: 'What kind of events does Youth Code Camp organize?',
      answer: 'We organize hackathons, workshops, and other events where young people can work on coding projects, learn new skills, and collaborate with others. Some of our popular events include HackNoel and HackWithMe.',
    },
    {
      question: 'Is there a cost to join?',
      answer: 'Most of our events are free, but some might require a small fee to help with event costs. We aim to keep our events affordable and accessible to everyone.',
    },
    {
      question: ' How does Youth Code Camp support projects?',
      answer: 'We mainly support projects showcased in our hackathons. For participants who want to continue developing their projects, we help them find sponsors and provide hosting for their projects.',
    },
    {
      question: 'How can I sign up for an event?',
      answer: 'You can sign up by visiting the event page on our website, which will link you to our calendar on Luma for registration. Stay updated by checking the event page regularly to see if there are any upcoming events and how to register.',
    },
    {
      question: 'Does Youth Code Camp support young programmers projects?',
      answer: 'Yes! We support the projects of young programmers by providing resources, feedback, and opportunities to showcase their work. If you have a project, we can help you develop it further.',
    },
    {
      question: 'How can I contact Youth Code Camp?',
      answer: 'You can reach us by visiting our website or sending an email to support@youthcodecamp.live',
    },
  ];

  return (
    <section className="faq-section" id="FAQ">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;