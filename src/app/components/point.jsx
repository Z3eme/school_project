import react from 'react';
import pythonData from '../resources/text/pythonData.json'
function Point() {
    const { Points } = pythonData;
    
    return (
        <div className='flex justify-center items-start max-w-[80%] text-black'>
            {Points.map((pt, index) => (
                <div key={index}>{pt.title}</div>
            ))}
        </div>
    );
}

export default Point