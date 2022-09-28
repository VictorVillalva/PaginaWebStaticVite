import Places from "./Places";
import fondo from "../assets/Img/fondo2.jpg";
import "../assets/Styles/main.css";

function Main() {
    return ( 
        <main>
            <>
            <div id="imgFondo">
                <img id="fondoimg" src={fondo}/>
            </div>
            <section>
                <Places/>
            </section>
            </>
        </main>
    );
}

export default Main;