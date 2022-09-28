import logo from '../assets/Img/logo-F1.png'
import '../assets/Styles/footer.css'


function Footer() {
    return (
        <footer>
            <section>
                <img src={logo} className='img-footer'></img>
                <div>
                    <p>© 2003-2022 Formula One World Championship Limited</p>
                </div>
            </section>
        </footer>
    )
}
export default Footer;