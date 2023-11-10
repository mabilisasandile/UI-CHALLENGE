import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/img1.png';
import img1Copy from '../images/img1Copy.png'
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import { Card } from 'react-bootstrap';


const Body = () => {
    return (
        <div className='body'>
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
                <div style={{ marginBottom: '-5px', height: '600px' }}>
                    <div className='body-content'>
                        <Card style={{ width: '400px', height: '400px', borderWidth: '2px', borderColor: 'aqua', borderRadius: '20px', margin: '10px' }}>
                            <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={img1Copy} style={{ width: '400px', height: '400px', borderRadius: '20px', marginTop: '-18px' }} />
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '400px', height: '400px', borderRadius: '20px', margin: '10px', backgroundColor: 'rgb(4, 27, 27)' }}>
                            <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <h1 style={{ margin: '20px' }}>
                                        Watch The <br></br>
                                        Future Of Web3
                                    </h1>
                                    <p>
                                        Your NFT3 acts as unified identity across all <br></br>
                                        Web3 aplication layers and a pathway toward <br></br>
                                        enabling personal monetization.
                                    </p>
                                    <h5 style={{ margin: '20px', color: 'aqua' }}>WATCH FULL VIDEO -</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div style={{ marginBottom: '-5px' }}>
                    <div className='body-content'>
                        <Card style={{ width: '400px', height: '400px', borderWidth: '2px', borderColor: 'aqua', borderRadius: '20px', margin: '10px', backgroundColor: 'rgb(4, 27, 27)' }}>
                            <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Card.Text>
                                    <h3 style={{ color: 'white', margin: '20px' }}>The first</h3>
                                    <p>
                                        Unified identity platform and network to engineer <br></br>
                                        a staked incentivization model to apply to the <br></br>
                                        identity problem, creating the concept of NFT3 it <br></br>
                                        is pseudonymous autonomous.
                                    </p>
                                    <button
                                        style={{
                                            color: 'black', margin: '20px', backgroundColor: 'aqua', borderRadius:'10px', borderWidth:'0px'
                                        }}>
                                        Learn more -
                                    </button>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '400px', height: '400px', borderRadius: '20px', margin: '10px', backgroundColor: 'rgb(4, 27, 27)' }}>
                            <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <h1 style={{ margin: '20px' }}>
                                        Watch The <br></br>
                                        Future Of Web3
                                    </h1>
                                    <p>
                                        Your NFT3 acts as unified identity across all <br></br>
                                        Web3 aplication layers and a pathway toward <br></br>
                                        enabling personal monetization.
                                    </p>
                                    <h5 style={{ margin: '20px', color: 'aqua' }}>WATCH FULL VIDEO -</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* <img src={img2} className='img' /> */}
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
