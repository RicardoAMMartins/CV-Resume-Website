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
      </div>
      <p>{t("test")}</p>
    </>
  );
}

export default App;
