import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 24px;
  background-color: black;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  color: white;
  span {
    font-weight: 700;
    text-transform: capitalize;
    font-size: 1.2rem;
    img {
      width: 50px;
      height: 50px;
      margin-right: 12px;
    }
  }
  div {
    button:not(:first-child) {
      margin-left: 12px;
    }

    button {
      padding: 5px;
      color: #000;
      text-transform: capitalize;
      font-size: 1rem;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      background-color: transparent;
      border: 1px solid goldenrod;
      transition: all 0.4s linear;
      a {
        color: goldenrod;
      }
      :hover {
        a {
          color: #f3f3f3;
        }
        background-color: goldenrod;
      }
    }
  }
`;

const FromLeft = keyframes`
  from{
    opacity:0;
    transform:translateX(-50px);
  }
  to{
    opacity:1;
    transform:translateX(0px);
  }
`;

const FromRight = keyframes`
  from{
    opacity:0;
    transform:translateX(50px);
  }
  to{
    opacity:1;
    transform:translateX(0px);
  }
`;

export const Functionalities = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: black;
  text-align: center;
  .func__col-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    animation: ${FromLeft} 1s linear;
    img {
      width: 60%;
    }
  }
  .func__col-2 {
    display: flex;
    gap: 1.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    animation: ${FromRight} 1s linear;

    h1 {
      display: flex;
      flex-direction: column;
      text-transform: capitalize;
    }

    img {
      width: 50%;
      align-self: center;
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #131313;
      text-shadow: 3px 3px 3px rgba(150, 150, 150, 1);
    }

    button {
      padding: 8px 12px;
      font-size: 1.3rem;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      background-color: goldenrod;
      color: #fff;
      transition: all 0.4s linear;
      box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
      -webkit-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
      -moz-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
      :hover {
        background-color: #f1b825;
      }
    }
  }

  @media (max-width: 428px) {
    .func__col-1 {
      display: none;
    }
    .func__col-2 {
      width: 100%;
    }
  }
`;

export const Services = styled.section`
  h2 {
    font-size: 2rem;
    margin-top: 50px;
    font-weight: 700;
    color: #131313;
    text-shadow: 3px 3px 3px rgba(150, 150, 150, 1);
    text-align: center;
  }
`;

export const Informations = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 94px 30px 160px;
  margin-bottom: -120px;
  font-size: 1.2rem;
  text-shadow: 3px 3px 3px rgba(150, 150, 150, 1);
  background-color: #fbc100;
  color: #000;
  clip-path: polygon(0 0, 100% 9%, 100% 100%, 0 91%);

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    width: 90%;
    margin-bottom: 15px;

    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;

export const Advantages = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -110px;
  font-size: 1.2rem;
  text-shadow: 3px 3px 3px #686868;
  padding: 120px 0 50px;
  background-color: #59a5a5;
  color: #e0dede;
  clip-path: polygon(0 11%, 100% 0, 100% 100%, 0% 100%);

  .AdvantagesCards {
    margin: 24px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  button {
    margin: 32px 0 12px;
    padding: 8px 12px;
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    background-color: goldenrod;
    color: #fff;
    transition: all 0.4s linear;
    box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
    -webkit-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
    -moz-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
    :hover {
      background-color: #e4c518;
    }
  }
`;

export const AdvantagesCard = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-shadow: 3px 3px 3px rgba(150, 150, 150, 1);
  width: 250px;
  height: 250px;
  background-color: goldenrod;
  border-radius: 100%;
  box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
  -webkit-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
  -moz-box-shadow: 6px 6px 5px 0px rgba(54, 54, 54, 0.75);
  transition: all 0.35s linear;
  h3 {
    margin-bottom: -5px;
    font-size: 1.3rem;
    color: #e0dede;
  }
  :hover {
    transform: scale(1.05);
  }
`;

export const Footer = styled.footer`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
