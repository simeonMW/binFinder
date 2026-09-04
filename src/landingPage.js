
import React, { useState } from "react";
import './landingPage.css';
import Map from './map.js'; 
import { IoTrash, IoMan } from "react-icons/io5";


export default function LandPage(){

    //changing language
    const langChange = [
        {
            headerTitleEng:<h1>Save the environment</h1>,
            headerTitleChi:<h1>Samalani chilengedwe</h1>,
            headerPeng:<p>
                Locate sanitation facilities near you with our geo sanitation facility locator
                </p>,
            headerPch:<p>Pezani malo otayila zinyalala kudzela mapu athu</p>,
            getStarted:'Yambani'
        },
        {
            firstContentHead:<h2>Locate sanitation sites near you</h2>,
            firstContentHeadch:<h2>Pezani ma bini ali pafupi nanu</h2>,
            firstContentPeng:<p>Use our map to save the environment. Geo sanitation
                locator was specifically created to ensure that waste is properly disposed of.
                simply use our maps to find bins and other sanitory facilities, color coded to your 
                specific need.
            </p>,
            firstContentch:<p>Gwilitsani ntchito mapu athu kuti musamale chilengedwe. Kalozera
                wa zida za ukhondo, anapangidwa kuti muzitaya zinyalala molondola. 
                Gwilitsani ntchito mapu athu kuti mupeze ma bini malinganan ndi mtundu 
                wa zinyalala komanso malo ena a zaukhondo
            </p>
        },
        {
            secondContentHead:<h2>Color coded facilities</h2>,
            secondContentHeadch:<h2>Mitundu yama bini ndi matanthauzo ake</h2>,
            secondContentch:<p>Zokamba</p>
        },
        {
            thirdContentHead: <h2>Why dispose when you can recycle?</h2>,
            thirdContentPeng: <p>recycling does more to the environment.<br/> The best way
                            to dispose wastes is to not dispose at all. See where you can dispose 
                            recycle wastes on our maps.</p>,
            thirdContentHeadch: <h2>Mutayilenji pamene mutha kugwilitsanso ntchito?</h2>,
            thirdContentch:<p>Pali Phindu lalikulu losamalira chilengedwe komanso
                lopeza chuma pogwilitsanso ntchito zinyalala. Izi ndizotheka ngat pali njila yopatulila zinyalala pamalo otayila
                zinyalala
            </p>
        }
    ]

    const colorCodes = [
        {
            id: 1,
            icon: <IoTrash size={40} color="red"/>,
            name: 'Hazard bin',
            example: "Chemicals, batteries..."
        },
        {
            id: 2,
            icon: <IoTrash size={40} color="blue"/>,
            name: 'Recyclable',
            example: "Cardboards, Plastic bottles..."
        },
        {
            id: 3,
            icon: <IoTrash size={40} color="green"/>,
            name: 'Organic',
            example: "food wastes, animal droppings..."
        },
        {
            id: 4,
            icon: <IoTrash size={40} color="black"/>,
            name: 'General wastes',
            example: "Can accomodate any waste"
        },
        {
            id: 5,
            icon: <IoMan size={40} color="green"/>,
            name: 'Non-paying toilets',
            example: "free rest rooms for either gender"
        },
        {
            id: 6,
            icon: <IoMan size={40} color="purple"/>,
            name: 'Paying toilets',
            example: "rest rooms that require a fee"
        }
    ]


    // Language state: 'eng' (default) or 'chi'
    const [language, setLanguage] = useState('eng');

    // Select content based on language
    let headerTitle = language === 'eng' ? langChange[0].headerTitleEng : langChange[0].headerTitleChi;
    let headerContent = language === 'eng' ? langChange[0].headerPeng : langChange[0].headerPch;
    let firstContentHead = language === 'eng' ? langChange[1].firstContentHead : langChange[1].firstContentHeadch;
    let firstContentPeng = language === 'eng' ? langChange[1].firstContentPeng : langChange[1].firstContentch;
    let secondContentHead = language === 'eng' ? langChange[2].secondContentHead : langChange[2].secondContentHeadch;
    let secondContentPeng = language === 'eng' ? langChange[2].secondContentPeng : langChange[2].secondContentch;
    let thirdContentHead = language === 'eng' ? langChange[3].thirdContentHead : langChange[3].thirdContentHeadch;
    let thirdContentPeng = language === 'eng' ? langChange[3].thirdContentPeng : langChange[3].thirdContentch;
    // Toggle language between English and Chichewa
    const changeLang = () => {
        setLanguage((prev) => (prev === 'eng' ? 'chi' : 'eng'));
    } 


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
                <div className="nav-bar">
                    <h2 className='logo'>logo</h2>
                    <button onClick={changeLang} id='change-language'>language</button> 
                </div>
               
                    
                <section className='shadow'>
                    <h2 className='title'>{headerTitle}</h2>
                    <p className='description'>
                        {headerContent}
                    </p>
                    <button id="get-started" onClick={handleGetStarted}>Get started</button>
                </section>
            </header>

            <section id='body'>

                <section className='map-explain'>
                    <div className="first-statement">
                        <h2>{firstContentHead}</h2>
                        <p>{firstContentPeng}</p>
                    </div>
                    
                    <img src={process.env.PUBLIC_URL + '/mapScreenshot.PNG'} alt="group picking trash" 
                    className="map-image" id="recycle" />
                </section>

                <section id="dump" className="color-code-container">
                   <div className="color-code-head">
                      <h2>{secondContentHead}</h2>
                   </div>

                    <div className="color-code-items">
                        {
                            colorCodes.map((item) => (
                                <div key={item.id} className='color-codes'>
                                    {item.icon}
                                    <p>{item.name}</p>
                                    <p>{item.example}</p>
                                </div>
                            )
                            )
                        }
                    </div>
                   
                </section>

                <section id="trash" className="body-container">
                   <div className="recycle">
                     <img src={process.env.PUBLIC_URL + '/recycling.png'} alt="woman recycling"/>

                     <div className='recycle-text'>
                        <h2>{thirdContentHead}</h2>
                        <p>
                           {thirdContentPeng} 
                        </p>
                     <button id="get-started" onClick={handleGetStarted}>Get started</button>
                     </div>
                     
                   </div>

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