import React from 'react'

const Header2 = () => {
    const locations = [
        { name: 'Banglore' },
        { name: 'Delhi' },
        { name: 'Punjab' },
        { name: 'Goa' },
        { name: 'Kerala' },
    ];

    return (
        <div>
            <div className='flex px-10 py-3 bg-gray-400 justify-between'>
                {locations.map((e, index) => (
                    <span key={index} className="mx-2">{e.name}</span>
                ))}
            </div>
        </div>
    );
};

export default Header2;
