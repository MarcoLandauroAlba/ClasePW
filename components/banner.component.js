const Banner = (props) => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

      <div id="carrusel" className="carousel-inner">
        {
          props.imagenes.map((element, index) => {
            console.log(element)
            if (index > 0) {
              return (
                <div key={index} className="carousel-item">
                  <img className="d-block w-100" src={element} alt="..." />
                </div>
              )
            } else {
              return (
                <div key={index} className="carousel-item active">
                  <img className="d-block w-100" src={element} alt="..." />
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