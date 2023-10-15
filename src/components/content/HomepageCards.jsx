

// eslint-disable-next-line react/prop-types
const CardComponent = ({image}) => {
  return (
    <div className="col-md-6 col-lg-4">
<div className="card card-cascade">
      {/* Card image */}
      <div className="view view-cascade overlay">
        <img
          className="card-img-top"
          src={image}
          alt="Card image cap"
        />
        <a>
          <div className="mask rgba-white-slight"></div>
        </a>
      </div>

      {/* Card content */}
      <div className="card-body card-body-cascade text-center">
        {/* Title */}
        <h4 className="card-title">
          <strong>Billy Coleman</strong>
        </h4>
        {/* Subtitle */}
        <h6 className="font-weight-bold indigo-text py-2">Web developer</h6>
        {/* Text */}
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam.
        </p>

        {/* Facebook */}
        <a className="btn-floating btn-small btn-fb" href="#!">
          <i className="fab fa-facebook-f"></i>
        </a>
        {/* Twitter */}
        <a className="btn-floating btn-small btn-tw" href="#!">
          <i className="fab fa-twitter"></i>
        </a>
        {/* Google + */}
        <a className="btn-floating btn-small btn-dribbble" href="#!">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>

      {/* Card footer */}
      <div className="card-footer text-muted text-center">2 days ago</div>
    </div>
    </div>
    
  );
};

export default CardComponent;
