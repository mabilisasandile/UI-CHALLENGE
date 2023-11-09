
import React, { useState } from 'react';


const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
        alert("Selected ", selectedOption);
    };

    return (
        <nav>
            <ul>
                <li>About</li>
                <li>isme</li>
                <li>Developer</li>
                <select id="dropdown" className='btn-1' value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">Resources</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </ul>
        </nav>
    );
};

export default Navbar;
