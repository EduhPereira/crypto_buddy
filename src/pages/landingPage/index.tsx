import {
  Header,
  Functionalities,
  Services,
  Informations,
  Advantages,
  AdvantagesCard,
  Footer,
} from "./styles";
import logo from "../../assets/img/crypto4.png";
import coins from "../../assets/img/coins.svg";
import investment from "../../assets/img/investment.svg";
import security from "../../assets/img/security.svg";
import crypto3 from "../../assets/img/crypto3.svg";
import reports from "../../assets/img/reports.svg";
import tracker from "../../assets/img/tracker.svg";
import { Link, useHistory } from "react-router-dom";
const LandingPage = () => {
  const history = useHistory();
  return (
    <>
      <Header>
        <span>
          <img src={logo} alt="" className="logo" />
        </span>
        <div>
          <button>
            <Link to="/login-voluntary">Register</Link>
          </button>
          <button>
            <Link to="/tracker">Tracker</Link>
          </button>
        </div>
      </Header>
      <Functionalities>
        <div className="func__col-1">
          <img src={crypto3} alt="" />
        </div>
        <div className="func__col-2">
          <h1>
            <img src={logo} alt="" />
          </h1>
          <h2>Crypto Buddy</h2>
          <p>
            The best and most reliable platform to receive information about
            cryptocurrencies. Reports, analyzes and recommendations made by
            experts in the financial market.
          </p>
        </div>
      </Functionalities>
      <Informations>
        <h2>What are Cryptocurrencies?</h2>
        <p>
          Cryptocurrencies are decentralized digital currencies, that is, they
          are not controlled by any specific agency or country.
        </p>
        <p>
          They are created in a blockchain network that is responsible for
          safely storing the most diverse types of information. Such as, for
          example, financial transactions, records and the data of people who
          participate in these transactions.
        </p>
        <p>
          These blockchain-generated cryptocurrencies have a value that, in some
          cases, can be converted to other currencies, such as the dollar or
          Brazilian real, and, therefore, they can be used as exchange currency
          for the purchase of products and consumption of services.
        </p>
      </Informations>
      <Advantages>
        <h2>Advantages</h2>
        <div className="AdvantagesCards">
          <AdvantagesCard>
            <h3>High Profitability Potential</h3>
            <img src={coins} alt="" />
          </AdvantagesCard>
          <AdvantagesCard>
            <h3>Investment Diversification</h3>
            <img src={investment} alt="" />
          </AdvantagesCard>
          <AdvantagesCard>
            <h3>Blockchain Security</h3>
            <img src={security} alt="" />
          </AdvantagesCard>
        </div>
      </Advantages>
      <Services>
        <h2>Our Services</h2>
        <Functionalities>
          <div className="func__col-1">
            <img src={reports} alt="" />
          </div>
          <div className="func__col-2">
            <h2>Reports, Analyzes and Recommendations</h2>
            <p>
              The best and most reliable platform to receive information about
              cryptocurrencies. Reports, analyzes and recommendations made by
              experts in the financial market.
            </p>
            <button onClick={() => history.push("/login-voluntary")}>
              Register
            </button>
          </div>
        </Functionalities>
        <Functionalities>
          <div className="func__col-2">
            <h2>Tracker</h2>
            <p>
              The best and most reliable platform to receive information about
              cryptocurrencies. Reports, analyzes and recommendations made by
              experts in the financial market.
            </p>
            <button onClick={() => history.push("/tracker")}>
              Search a Crypto
            </button>
          </div>
          <div className="func__col-1">
            <img src={tracker} alt="" />
          </div>
        </Functionalities>
      </Services>
      <Footer>
        <span>@ACME 2021 - All Rights Reserved</span>
      </Footer>
    </>
  );
};

export default LandingPage;
