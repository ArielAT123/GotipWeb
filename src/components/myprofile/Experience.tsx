const Experience = () => {
    const jobs = [
      { company: "Apple", duration: "May 2015 – Present", logo: "/logos/apple.svg" },
      { company: "Microsoft", duration: "May 2017 – Present", logo: "/logos/microsoft.svg" },
      { company: "Tata", duration: "May 2022 – Present", logo: "/logos/tata.svg" },
    ];
  
    return (
      <div className="bg-white shadow rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-lg font-semibold">Experience</h5>
          <button className="text-blue-600 text-sm">+ Add</button>
        </div>
        {jobs.map((job, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={job.logo} alt={job.company} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h6 className="font-medium">{job.company}</h6>
              <p className="text-xs text-gray-500">{job.duration}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Experience;
  