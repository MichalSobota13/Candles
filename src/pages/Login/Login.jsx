import "./Login.css";
import { Footer } from "../../components";
import React from "react";

export const Login = () => {
  return (
    <>
      <div className="LoginPage">
        <div className="LoginTemplate">
          <h2>Logowanie</h2>
          <label>
            <input
              type="email"
              id="email"
              placeholder="Wpisz swój e-mail"
            />
            <p></p>
            <input
              type="password"
              id="password"
              placeholder="Wpisz swoje hasło"
            />
          </label>
          <button>Zaloguj</button>
          <a href="/">Nie pamiętam loginu lub hasła</a>
        </div>
        <div className="RegistrationTamplete">
          <h2>Rejestracja</h2>
          <p>
            Jeśli jesteś nowym użytkownikiem i chcesz korzystać z wygody
            własnego konta.
          </p>
          <button>Załóż nowe konto</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
