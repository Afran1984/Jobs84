import React, { useEffect, useState } from 'react';
import ShowFeatures from '../ShowFeatures/ShowFeatures';

const FeatureJob = () => {
    const [feature, setFeature] = useState([]);
// load Show All data
    const [dataLength, setDataLength] = useState(4);
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
                    feature.slice(0, dataLength).map(job => <ShowFeatures job={job} key={job.id}></ShowFeatures> )
                }
            </div>
            <div className={dataLength === feature.length && 'hidden'}>
            <button onClick={()=> setDataLength(feature.length)} className="btn">See-All Jobs..</button>
            </div>
        </div>
    );
};

export default FeatureJob;