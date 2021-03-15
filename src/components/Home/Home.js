import React from 'react';
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import League from '../League/League';

const Home = () => {

    const [leagues, setLeagues] = useState([]);
    const firstTwenty = leagues.slice(0,20);
  
    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => res.json())
      .then(data => setLeagues(data.leagues))
    }, [])

    return (
        <div>
          <div className="container">
            <div className="row">
                <Banner></Banner>

                {
                firstTwenty.map((league) =><League league={league}></League>)
                }

            </div>
          </div>
          
        </div>
    );
};

export default Home;