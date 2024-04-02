
import { useLoaderData, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const JobDetiles = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    // const idInt = parseInt(id)
    const job = jobs.find(job => job.id = id);
    console.log(job);
    return (
        <div>
            <h1>Job Details:{id}</h1>
            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border md:col-span-3'>
                    <h2 className='text-4xl'>Details comming hear..</h2>
                </div>
                <div className='border'>
                    <h2 className='text-2xl'>Jobs...</h2>
                    <NavLink to={'/apply'}> <button className='btn w-full'>Apply Now..</button></NavLink>
                </div>

            </div>
        </div>
    );
};

export default JobDetiles;