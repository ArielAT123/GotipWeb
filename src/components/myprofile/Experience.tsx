'use client';

import { useState } from 'react';

interface JobData {
  company: string;
  duration: string;
  months: string;
  logo: string;
}

const Experience: React.FC = () => {
  const jobs: JobData[] = [
    { company: 'Apple Computer, Inc.', duration: 'May 2015 – Present Employment', months: 'Duration 8 mos', logo: '/logos/apple.svg' },
    { company: 'Microsoft Corporation', duration: 'May 2017 – Present Employment', months: 'Duration 1 yrs 5 mos', logo: '/logos/microsoft.svg' },
    { company: 'Tata Consultancy Services.', duration: 'May 2022 – Present Employment', months: 'Duration 6 yrs 10 mos', logo: '/logos/tata.svg' },
    { company: 'Amazon Inc.', duration: 'Jun 2023 – Present Employment', months: 'Duration 10 mos', logo: '/logos/amazon.svg' },
  ];

  const [showAll, setShowAll] = useState<boolean>(false);
  const visibleJobs: JobData[] = showAll ? jobs : jobs.slice(0, 3);

  return (
    <div className="bg-white shadow rounded-2xl p-4 w-full max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-md font-semibold text-gray-800">Experience</h5>
        <button
           className="bg-blue-100 text-blue-600 text-base w-6 h-6 rounded flex items-center justify-center font-bold leading-none hover:bg-blue-200 transition"
          > +
        </button>

      </div>

      {visibleJobs.map((job, index) => (
        <div key={index} className="flex items-start mb-4">
          <img src={job.logo} alt={job.company} className="w-10 h-10 rounded-full mr-3 mt-1" />
          <div className="flex-1 ml-[18%]">
            <h6 className="font-semibold text-sm text-gray-800">{job.company}</h6>
            <p className="text-xs text-gray-600">{job.duration}</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">{job.months}</p>
              <button className="text-xs text-blue-600 border border-gray-300 px-2 py-0.5 rounded hover:bg-gray-100 transition">
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}

      {jobs.length > 3 && (
        <div className="flex justify-center mt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 text-sm hover"
          >
            {showAll ? 'Show less ▲' : 'Show more ▼'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
