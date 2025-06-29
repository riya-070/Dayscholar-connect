import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    id: 1,
    header: 'What is DayConnect?',
    text: 'DayConnect is a platform designed to help day scholars easily connect with seniors, alumni, and domain experts from within their own university.Built to overcome the common challenges faced by day scholars—like missing out on evening societies and informal campus networks—DayConnect ensures that support, mentorship, and collaboration are just a few clicks away.',
  },
  {
    id: 2,
    header: 'How can DayConnect benefit me?',
    text: 'DayConnect is a platform that connects students with seniors and alumni based on skills and domains. Easily find the right person for mentorship, project help, or career advice—just by searching a keyword.It bridges the gap between experience and curiosity, making guidance accessible to everyone. ',
  },
  {
    id: 3,
    header: 'How do I search for mentors on DayConnect?',
    text: (
      <span>
        To find a mentor on DayConnect, just type a skill or domain into the search bar—like "Web Dev" or "AI."
You’ll see a list of experienced seniors and alumni. Click a profile to view their details and reach out directly.
      </span>
    ),
  },
  {
    id: 4,
    header: 'How do I contact a mentor on DayConnect?',
    text: 'To contact a mentor on DayConnect, open their profile from the search results.You’ll find their contact details like email or LinkedIn—just reach out directly from there to start the conversation.',
  },
  {
    id: 5,
    header: 'Is DayConnect only for technical skills?',
    text: (
        <span>
          No, DayConnect caters to a wide range of skills and domains. While it includes technical skills like programming, web development, and data science, it also encompasses non-technical skills such as marketing, design, content writing, and more. The platform aims to connect students with mentors across diverse fields. We are open to {' '}
          <Link to="/reach-out">suggestions</Link> for listing new domains as well.
        </span>
      ),
  },

  {
    id: 6,
    header: 'Why are some skills listed but do not have much data?',
    text: `We are working on expanding and scaling our database which is currently facing some non-technical issues. Hopefully we'll get it resolved ASAP. Meanwhile you can check all of other domains that we have to offer!`,
  },

  {
    id: 7,
    header: 'How can I contribute to DayConnect?',
    text: 'Absolutely! If you are an alumni or senior or anyone from the fraternity with expertise in a particular field, we encourage you to contribute to DayConnect. All you have to do is head to the "Get Listed!" section and fill out a small form specifying to us your skills and relevant experience. You can give back to the community by sharing your knowledge, providing guidance, and supporting the current students in their academic and professional endeavors.',
  },
  {
    id: 8,
    header: 'I have encountered an issue or need assistance with DayConnect. How can I get support?',
    text: (
        <span>
          If you are facing any issues, have suggestions to provide or require assistance with DayConnect, please reach out to our support team. You can contact the developers through the provided support channels, given on the {' '}
          <Link to="/reach-out">Meet The Developers</Link> section. We are here to help and ensure a smooth experience for all users.
        </span>
      ),
  },
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
          <h5 className="rc-accordion-title">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={active === id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className="rc-accordion-body-2">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

const DetailSidebar = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-2">
            <div className="card">
              <div className="card-body">
                <h4 className="form-heading">Frequently Asked Questions [FAQs]</h4>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSidebar;
