import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './League.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/image 3.png';


const League = (props) => {
    const {strLeague, strSport, idLeague} = props.league;
    // const history = useHistory();
    // const showLeagueDetail = ((idLeague) => {
    //     history.push(`/league/${idLeague}`);
    // })
    

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="league">
                            <img src={img} alt="logo"/>
                            <h3>Name : {strLeague}</h3>
                            <h5>Sports Type : {strSport}</h5>
                            <Link to={`/league/${idLeague}`}>
                                <button className="btn btn-primary">Explore<FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </Link>
                            {/* <p><button onClick={() => showLeagueDetail(idLeague)}>click me</button></p>  */}
                        </div>
                        
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default League;