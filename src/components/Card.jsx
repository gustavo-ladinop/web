
import reactImg from '../assets/The A Team Bullet Rid.png';
//import reactImg2 from '../assets/Chevrolet 1972 Blazer 2WD.png';
// import reactImg from ".../assets/react.png"


function Card( {articulo}) {
console.log (articulo)   
return(
        <div className="card" style={{width: '18rem'}}>
            
        <img src={reactImg} className="card-img-top" alt="..." width={"30px"} />
        {/* <img src='reactImg' className="card-img-top" alt="..." width={"40px"} /> */}
        {/* <img src={reactImg('./assets/react.png')}/> */}
        <div className="card-body">

            {/* props */}
                        
            <h5 className="card-title"> {articulo.price} </h5>
            <p className="card-text">   {}  </p>
            <h1> $ {articulo.nombre} </h1>
            <a href="#" className="btn btn-primary">Buy</a>
        </div>
        </div>
    )
    
    

}

export default Card