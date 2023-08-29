import React from 'react';



const notices =  [
  {
    title: 'AIUB Introduces Day Care Center',
    date: '27 Jul',
    department: null,
  },
  {
    title: 'Fall 2023-24 PRE-REGISTRATION STEPS FOR THE STUDENTS OF DEPARTMENT OF EEE, CoE & IPE',
    date: '23 Jul',
    department: 'FE',
  },
  {
    title: 'Revised Pre-Registration Flow Chart of Fall 2023-24 (July 26, 2023)',
    date: '30 Jul',
    department: null,
  },
  {
    title: 'All Probation Related Notices (Pre-registration, Counselor name)',
    date: '30 Jul',
    department: null,
  },
  {
    title: 'All FBA Related Notices (Internship, TA recruitment, Pre-registration)',
    date: '25 Jul',
    department: 'FBA',
  },
  {
    title: 'Pre-registration courses offered for Fall 2023-2024',
    date: '30 Jul',
    department: null,
  },
  {
    title: 'All FST Related Notices (Pre-registration, Dean\'s List, Internship) [Updated 30/07/23]',
    date: '30 Jul',
    department: 'FST',
  },
];

const Notices = () => {
  return (
    <fieldset>

 
 <div><Header></Header></div>
    <div>
      <h2>Notices</h2>
      {notices.map((notice, index) => (
        <div key={index}>
          <p>
            <strong>{notice.title}</strong> - {notice.date}
          </p>
          {notice.department && <p>{notice.department}</p>}
        </div>
      ))}
    </div>
    <div><Footer></Footer></div>
    </fieldset>
  );
};

export default Notices;
