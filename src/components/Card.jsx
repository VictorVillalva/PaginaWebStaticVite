import "../assets/Styles/places.css";

function Card(props){
return (
    <>
    <div className='places' id={props.id}>
        <img className="imgPlace" src={props.image}></img>
        <p className='place'>{props.place}</p> 
        <p className='description'>{props.description}</p>
    </div>
    </>
)
}
export default Card;