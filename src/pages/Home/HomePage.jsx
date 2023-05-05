import "./HomePage.css"
import Main from "../../assets/Main.jpg"

export const HomePage = () => {
  return (
    <div className="HomeContainer">
      <div className="Banner">
        <img src={Main} alt="alal" />
        <div className="BannerContent">
          <h1>API CANDLES</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <p>
              Diam dictum nulla nullam amet morbi eros id fringilla. 
            </p>
          </span>
          <p>
            Sed quis morbi dictum aliquam tristique quis euismod id.
          </p>
          <button>DOWIEDZ SIĘ WIĘCEJ</button>
          <div></div>
        </div>
      </div>
      <div className="MainContent"></div>
    </div>
  );
}