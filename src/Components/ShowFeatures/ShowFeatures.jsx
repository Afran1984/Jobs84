
import { MdOutlineLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const ShowFeatures = ({job}) => {
    console.log(job);
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary}= job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Img" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4'>{remote_or_onsite}</button>
            <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE]'>{job_type}</button>
          </div>
          <div className="mt-4 flex gap-3">
            <h1 className="flex"><MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn>{location}</h1>
            <h1 className="flex"> <CiDollar className="text-2xl mr-2"></CiDollar>{salary}</h1>
          </div>
          <div className="card-actions">
            <NavLink to={`/job/:${id}`}>
            <button className="btn btn-primary">View Details</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default ShowFeatures;