import React from 'react';
import './cards.scss'
import {BsArrowLeftShort, BsArrowRightShort, BsDot} from 'react-icons/bs'
import img1 from '../../../assets/img/mpcl/HPC-1.jpg'
import img2 from '../../../assets/img/mpcl/data-science.jpg'
import img3 from '../../../assets/img/mpcl/artifical-intelligence-banner.jpg'
import img4 from '../../../assets/img/mpcl/NETWORKING-SECURITY-SOLUTIONS.jpg'
import img5 from '../../../assets/img/mpcl/Software-Defines-Storage-1.jpg'
import img6 from '../../../assets/img/mpcl/DATA-ENCRYPTION-AND-KEY-MANAGEMENT-SOLUTIONS-1.jpg'



const Cards = () => {

    const Data = () => [
        {
            id: 1,
            imgSrc: img1,
            destTitile: 'HPC',
            location: "Mumbai",
            grade:'HPC',
        },
        {
            id: 2,
            imgSrc: img2,
            destTitile: 'HPC',
            location: "Mumbai",
            grade: 'HPC',
        },
        {
            id: 3,
            imgSrc: img3,
            destTitile: 'HPC',
            location: "Mumbai",
            grade: 'HPC',
        },
        {
            id: 4,
            imgSrc: img4,
            destTitile: 'HPC',
            location: "Mumbai",
            grade: 'HPC',
        },
        {
            id: 5,
            imgSrc: img5,
            destTitile: 'HPC',
            location: "Mumbai",
            grade: 'HPC',
        },
        {
            id: 6,
            imgSrc: img6,
            destTitile: 'HPC',
            location: "Mumbai",
            grade: 'HPC',
        },
    ]

    return (
        <section className='popular section container'>
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Popular services
                        </h2>

                        <p>
                            Whatever IT takes services, We offer High performance computing
                            and data analytics solutions to businesses of all  sizes .

                        </p>
                    </div>

                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        
                        <BsArrowRightShort className='icon'/>

                    </div>
                </div>

                <div className="mainContent grid">
                    <div className="singleDestination">
                        <div className="destImage">
                            <img src={img} alt="Image title" />

                            <div className="overlayInfo">
                                <h3>Some Text</h3>
                                <p>
                                    Lorem ipsum dolor sit amet.
                                </p>

                                <BsArrowRightShort className='icon'/>
                            </div>
                        </div>

                        <div className="destFooter">
                            <div className="number">
                                01
                            </div>
                            <div className="destText flex">
                                <h6>
                                    India
                                </h6>
                                <span className="flex">
                                    <span className='dot'>
                                        <BsDot className='icon' />

                                    </span>
                                    Dot
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;