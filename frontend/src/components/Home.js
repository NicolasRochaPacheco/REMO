import "./Home.css";
import "./Pages.css";
import { Link } from 'react-router-dom';

function Home(props) {
  
  return (
    <div className="page home">
      <div className="home-banner">
        <div className="home-title">TU NUEVO HOGAR COMIENZA ACÁ</div>
        <div className="home-contact">
          <div className="home-contact-title">NO DUDES EN CONTACTARNOS</div>
          <Link to={{pathname: "https://wa.me/573102201017"}} target="_blank">
            <div className="page-bt home-contact-bt"><i className="fab fa-whatsapp" /></div>
          </Link>
          <Link to={{pathname: "tel:573102201017" }} target="_blank">
            <div className="page-bt home-contact-bt"><i className="fas fa-phone" /></div>
          </Link>
          <Link to={{pathname: "mailto:n.nicolas98@hotmail.com"}} target="_blank">
            <div className="page-bt home-contact-bt"><i className="fas fa-envelope" /></div>
          </Link>
        </div>
      </div>
    </div>
  );

}

export default Home;
