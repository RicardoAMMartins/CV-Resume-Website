import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Button } from "@mui/material";

type LanguageObject = { [key: string]: { nativeName: string } };

const languages: LanguageObject = {
  en: { nativeName: "English" },
  pt: { nativeName: "Portuguese" },
};

function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <>
      {Object.keys(languages).map((lng: string) => (
        <button
          type="submit"
          key={lng}
          onClick={() => i18next.changeLanguage(lng)}
          disabled={i18next.resolvedLanguage === lng}
        >
          {languages[lng as keyof typeof languages].nativeName}
        </button>
      ))}
      <div>
        <Button variant="contained">TESTE 2</Button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{t("test")}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
