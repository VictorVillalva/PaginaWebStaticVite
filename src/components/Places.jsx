import Card from './Card';
import '../assets/Styles/places.css';
import sakhir from '../assets/Img/sakhir.jpg';
import mexico from '../assets/Img/mexico.jpeg';
import imola from '../assets/Img/imola.jpg';

function Places() {
    const bestPlaces = [
        {
            id:1,
            place: "Sakhir",
            description: "LONGITUD: 6299 metros,CURVAS: 15 (6 izda | 9 dcha),   GANADOR 2021: Lewis Hamilton,  RÉCORD: Lewis Hamilton - 1:27.264 - Año: (2020)",
            image: sakhir
        },
        {
            id:2,
            place: "Mexico",
            description: "LONGITUD: 4304 metros , CURVAS: 16 (7 izda | 9 dcha) , GANADOR 2021: Max Verstappen , RÉCORD: Valtteri Bottas - 1:18.741 - Año: (2018",
            image: mexico
        },
        {
            id:3,
            place: "Imola",
            description: "LONGITUD: 0 metros,CURVAS: 10 (9 izda | 10 dcha) , GANADOR 2021: Max Verstappen , RÉCORD: Lewis Hamilton - 01:15.484 - Año: (2020)",
            image: imola
        }
    ]

    return (
        <div className='Races'>
            <h2>BEST PLACES TO RACE</h2>
            {bestPlaces.map((user)=>{
                return (
                    <Card 
                    id={user.id}
                    place={user.place}
                    description={user.description}
                    image={user.image}
                    />
                );
            })}
        </div>
    );
}

export default Places;