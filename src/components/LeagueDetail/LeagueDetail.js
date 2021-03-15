import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import img from '../../images/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState([]);
    const {strBanner, strLeague, intFormedYear, strCountry, strSport, strGender, strYoutube, strFacebook, strTwitter} = league;


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    },)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="leagueDetailArea">
                            <div className="bannerArea">
                                <img src={strBanner} alt="banner img"/>
                            </div>
                            <div className="mainArea">
                                <div className="topPart d-flex">
                                    <div className="littleInfo">
                                        <h5>{strLeague}</h5>
                                        <h6>Founded : {intFormedYear}</h6>
                                        <h6>Country : {strCountry}</h6>
                                        <h6>Sport Type : {strSport}</h6>
                                        <h6>Gender : {strGender}</h6>
                                    </div>
                                    <div className="topPartImg">
                                        <img src={img} alt="poster img"/>
                                    </div>
                                    
                                </div>
                                <div className="paragraph">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, cumque. Nesciunt iure sequi dolorem et, repellat, dolores unde exercitationem doloremque consequuntur commodi explicabo officia sunt! Dolorem error natus tempora iste quo debitis, necessitatibus, facilis dolor velit praesentium omnis reprehenderit quasi?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis asperiores adipisci quo, quibusdam omnis alias a assumenda recusandae. Tenetur aspernatur commodi alias iure soluta aut, unde libero molestiae pariatur corporis excepturi quaerat veritatis itaque id dolores at dolorem architecto magnam.</p>
                                </div>
                                <div className="socialIcon">
                                    <a href={strTwitter} className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href={strFacebook} className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href={strYoutube} className="youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>




























            {/* <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="leagueDetailWrapper">
                                <div className="leagueBanner">
                                    <img src={strBanner} alt="Banner"/>
                                </div>
                                <div className="leagueDescription">
                                        <div className="imgPart">
                                        <div className="littleInfo">
                                            <h5>{strLeague}</h5>
                                            <ul>
                                                <li><h6>Founded : {intFormedYear}</h6></li>
                                                <li><h6>Country : {strCountry}</h6></li>
                                                <li><h6>Sport Type : {strSport}</h6></li>
                                                <li><h6>Gender : {strGender}</h6></li>
                                            </ul>
                                        </div>
                                            </div>
                                            </div>
                                        <div className="paragraph">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ea harum dicta, culpa soluta inventore in laboriosam repellendus distinctio impedit expedita, sint temporibus debitis similique quo! Culpa reprehenderit tenetur ea.</p>
                                            
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iure, officiis minima libero distinctio nulla nemo? Exercitationem sequi nemo nulla id ad optio beatae autem consectetur, illo enim! Architecto, nulla!</p>
                                        </div>
                                        <div className="socialIcon">
                                            <p><a href="">facebook</a></p>
                                            <p><a href="">twiter</a></p>
                                            <p><a href="">youtube</a></p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div> */}
        </div> 
        // root div end
    
            
    );
};

export default LeagueDetail;