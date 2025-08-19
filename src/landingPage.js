
import React, { useState, useEffect } from "react";
import './landingPage.css';
import Map from './map.js'; 


export default function LandPage(){
    let imgSource = process.env.PUBLIC_URL + '/pickingTrash.jpg'
    const slideshowImages = [
        process.env.PUBLIC_URL + '/bolehole.jpg',
        process.env.PUBLIC_URL + '/kids.jpg',
        process.env.PUBLIC_URL + '/plant.jpg'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Calculate previous index for stacking effect
    const prevIndex = (currentIndex - 1 + slideshowImages.length) % slideshowImages.length;

    // Optional: auto-advance every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
        }, 10000); // 10 seconds between transitions
        return () => clearInterval(interval);
    }, [slideshowImages.length]);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );
        const sections = document.querySelectorAll('.body-container');
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    //changing language
    const langChange = [
        {
            headerTitleEng:<h1>Save the environment</h1>,
            headerTitleChi:<h1>Samalani chilengedwe</h1>,
            headerPeng:<p>content here</p>,
            headerPch:<p>Zokamba</p>,
            getStarted:'Yambani'
        },
        {
            firstContentHead:<h2>Content head</h2>,
            firstContentHeadch:<h2>Mutu wankhani</h2>,
            firstContentPeng:<p>statement here</p>,
            firstContentch:<p>Zokamba</p>
        },
        {
            secondContentHead:<h2>Content head</h2>,
            secondContentHeadch:<h2>Mutu wankhani</h2>,
            secondContentPeng:<p>statement here</p>,
            secondContentch:<p>Zokamba</p>
        }
    ]

    // Facts object with English and Chichewa facts for each slide
    const facts = {
        heading: 'Did you know?',
        headingCh: 'Kodi mukudziwa?',
        eng: [
            'Recycling helps conserve natural resources.',
            'Kids can make a big difference in keeping the environment clean.',
            'Planting trees improves air quality and reduces carbon footprint.'
        ],
        chi: [
            'Kugwilitsanso ntchito zinyalala kumasala zinthu zachilengedwe.',
            'Ana ali ndikuthekela kosintha chilengedwe.',
            'Kukonza mitengo kumathandiza kuwonjezera mpweya wabwino komanso kuchepetsa zinyalala za carbon.'
        ]
    };

    // Language state: 'eng' (default) or 'chi'
    const [language, setLanguage] = useState('eng');

    // Select content based on language
    let headerTitle = language === 'eng' ? langChange[0].headerTitleEng : langChange[0].headerTitleChi;
    let headerContent = language === 'eng' ? langChange[0].headerPeng : langChange[0].headerPch;
    let firstContentHead = language === 'eng' ? langChange[1].firstContentHead : langChange[1].firstContentHeadch;
    let firstContentPeng = language === 'eng' ? langChange[1].firstContentPeng : langChange[1].firstContentch;
    let secondContentHead = language === 'eng' ? langChange[2].secondContentHead : langChange[2].secondContentHeadch;
    let secondContentPeng = language === 'eng' ? langChange[2].secondContentPeng : langChange[2].secondContentch;

    // Toggle language between English and Chichewa
    const changeLang = () => {
        setLanguage((prev) => (prev === 'eng' ? 'chi' : 'eng'));
    } 

    // Dynamic label for language toggle button
    const langLabel = language === 'eng' ? 'CH' : 'EN';

    // State to control map visibility
    const [showMap, setShowMap] = useState(false);
    const handleGetStarted = () => {
        setShowMap(true);
    };

    if (showMap) {
        return <Map onReturnHome={() => setShowMap(false)} />;
    }
    return (
        <div className="landing-page">

            <header id="header">
                <img src={imgSource} alt="group picking trash" className="header-image"/>
                <button onClick={changeLang} id='change-language'>language</button>
                <h1 className='logo'>logo</h1>
                    
                <section className='shadow'>
                    <h2 className='title'>{headerTitle}</h2>
                    <p className='description'>
                        {headerContent}
                    </p>
                    <button id="get-started" onClick={handleGetStarted}>Get started</button>
                </section>
            </header>

            <section id='body'>

                <section id="recyling" className="body-container">
                    <img src={process.env.PUBLIC_URL + '/recycling.jpg'} alt="group picking trash" 
                    className="content-image" id="recycle" />
                    <h2>{firstContentHead}</h2>
                    <p>{firstContentPeng}</p>
                </section>

                <section id="dump" className="body-container">
                    <img src={process.env.PUBLIC_URL + '/dump.jpg'}
                     alt="land-fill" className="content-image" id="dump" />
                    <h2>{secondContentHead}</h2>
                    <p>{secondContentPeng}</p>
                </section>

                <section id="trash" className="body-container">
                    <div className="slideshow-container">
                        
                        <img
                            src={slideshowImages[prevIndex]}
                            alt="previous"
                            className="slideshow-image behind"
                            style={{ zIndex: 1 }}
                        />

                        <img
                            src={slideshowImages[currentIndex]}
                            alt="current"
                            className="slideshow-image front"
                            style={{ zIndex: 2 }}
                        />

                    </div>

                    <div className="slideshow-controls">

                        <button onClick={() => setCurrentIndex(prevIndex)} className="slideshow-button">
                            -
                        </button>

                        <button onClick={() => setCurrentIndex((currentIndex + 1) % slideshowImages.length)} className="slideshow-button">
                            +
                        </button>

                    </div>
                    {/* Fact slideshow, language-aware */}

                    <h2 style={{ gridColumn: 2, gridRow: 1, alignSelf: 'start', color: 'blue' }} className="facts-heading">
                        {language === 'eng' ? facts.heading : facts.headingCh}
                    </h2>

                    <p style={{ gridColumn: 2, gridRow: 1, alignSelf: 'center'}} className="facts-content">
                        {language === 'eng' ? facts.eng[currentIndex] : facts.chi[currentIndex]}
                    </p>

                </section>         
                <footer className="footer">

                    <h2 className="contacts">Contacts</h2>

                    <ul>
                        <li className="contacts">09990000000</li>
                        <li className="contacts">09980000000</li>
                        <li className="contacts">08870000000</li>
                    </ul>

                    <img src={process.env.PUBLIC_URL + '/sani-pic.png'} alt='footer-img' id='footerPic'/>

                </footer>
            </section>
        </div>
    );
}