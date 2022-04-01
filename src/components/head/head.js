import "./_head.css";
import SearchIcon from '@mui/icons-material/Search';

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
            <SearchIcon />
          </div>
        </form>
        </div>
      </nav>
    </>
  );
}

export default Head;
