import React, { useEffect, useState } from 'react';
import ShowFeatures from '../ShowFeatures/ShowFeatures';

const FeatureJob = () => {
    const [feature, setFeature] = useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setFeature(data))
    },[])
    return (
        <div>
            <div className='text-center'> 
                <h2 className='text-6xl'>Feature-Jobs:{feature.length}</h2>
            <p>Totam ex quibusdam autem voluptas quo.</p>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-4'>
                {
                    feature.map(job => <ShowFeatures job={job} key={job.id}></ShowFeatures> )
                }
            </div>
        </div>
    );
};

export default FeatureJob;