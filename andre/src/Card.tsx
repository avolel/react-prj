import Ras1 from "./assets/ras1.png";
import Ras2 from "./assets/ras2.png";

function Card() {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0" style={{ width: "18rem" }}>
          <div className="card">
            <img
              src={Ras1}
              className="img_fluid card-img-top"
              alt="Rastaman 1"
            />
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{ width: "18rem" }}>
          <div className="card">
            <img
              src={Ras2}
              className="img_fluid card-img-top"
              alt="Rastaman 2"
            />
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{ width: "18rem" }}>
          <div className="card">
            <img
              src={Ras2}
              className="img_fluid card-img-top"
              alt="Rastaman 2"
            />
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{ width: "18rem" }}>
          <div className="card">
            <img
              src={Ras2}
              className="img_fluid card-img-top"
              alt="Rastaman 2"
            />
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
