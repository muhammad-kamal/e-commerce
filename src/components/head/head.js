import "./_head.css";

function Head() {
  return (
    <>
      <nav className="navbar navbar-light justify-content-between head">
        <div className="container jcenter">
        <div className="headCap">
          <i className="fas fa-user-tie mx-2"></i>
          <span>AL QUWATLI</span>
        </div>
        <form className="form-inline d-flex">
          <input
            className="form-control searchI"
            type="search"
            placeholder="Search"
          />
          <div className="searchB" type="submit">
            <i className="fas fa-search"></i>
          </div>
        </form>
        </div>
      </nav>
    </>
  );
}

export default Head;
