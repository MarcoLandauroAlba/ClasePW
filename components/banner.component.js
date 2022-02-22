import Image from "next/image"

const Banner = (props) => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

      <div id="carrusel" className="carousel-inner">
        {
          props.imagenes.map((element, index) => {
            if (index > 0) {
              return (
                <div key={index} className="carousel-item">
                  <Image 
                    className="d-block w-100" 
                    src={element} 
                    alt="..."
                    width={500}
                    height={250}
                    objectFit="cover"
                  />
                </div>
              )
            } else {
              return (
                <div key={index} className="carousel-item active">
                <Image
                    className="d-block w-100" 
                    src={element} 
                    alt="..."
                    width={500}
                    height={250}
                    objectFit="cover"
                  />
                </div>
              )
            }
          })
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default Banner