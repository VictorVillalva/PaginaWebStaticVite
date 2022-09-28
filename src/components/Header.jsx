import logo from '../assets/Img/logo-F1.png';
import '../assets/Styles/header.css';

function Header(){
    return(   
        <header>
            <img src={logo} className="Logo"></img>
            <nav>
            <a href="/" id="txtHome">HOME</a>
            <a href="/" id="txtTeam">TEAMS</a>
            <a href="/"id="txtPicture">PICTURES</a>
            <a href="/" id="txtPosition">POSITIONS</a>
            <a href="/"id="txtPlace">PLACES</a>
            </nav>
        </header>
    )
}
export default Header