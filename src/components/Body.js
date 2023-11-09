import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';


const Body = () => {
    return (
        <div>
            <div className='first-header'>
                <h1 style={{ marginRight: '10px' }}>NFT3 The First</h1>
                <p>
                    Your NFT3 acts as a unified identity across all Web3 <br></br>
                    application layers and a pathway toward enabling <br></br>
                    personal monetization.
                </p>
            </div>

            <h1>
                Unified Virtual Identity <br></br>
                Network For Web3
            </h1>
            <br></br>
            <div style={{ marginBottom: '20px' }}>
                <button style={{ marginRight: '10px', borderRadius: '5px', borderWidth: '0px', height: 25, backgroundColor: 'aqua' }}>Browse NFTs Now</button>
                <FontAwesomeIcon icon={faCirclePlay} />
                <span style={{ marginLeft: '5px' }}>Play video</span>
            </div>

            <div>
                <div style={{ marginBottom: '-5px' }}>
                    <img src={img1} className='img' />
                </div>
                <div style={{ marginBottom: '-5px' }}>
                    <img src={img2} className='img' />
                </div>
                <div style={{ marginBottom: '-5px' }}>
                    <img src={img3} className='img' />
                </div>
                <div style={{ marginBottom: '-5px' }}>
                    <img src={img4} className='img' />
                </div>
                <div style={{ marginBottom: '-5px' }}>
                    <img src={img5} className='img' />
                </div>
                <div style={{ marginBottom: '-5px' }}>
                    <img src={img6} className='img' />
                </div>
            </div>

        </div>
    );
};

export default Body;
