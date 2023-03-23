import "./App.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState } from "react";
import {   Form } from "react-bootstrap";

function App() {
  const { t } = useTranslation();

  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
    setActive(!active);
  };

  return (
   
     

      <div className="container ">

      <h1 className="text-danger text-center py-2">Translator 2.0</h1>
      <Form.Select size="lg" className="w-50 mx-auto    " onChange={handleClick}>
        <option>Select Language</option>
        <option value={"en"}>English</option>s
        <option value={"hi"}>Hindi</option>
        <option value={"bn"}>Bangla</option>
      </Form.Select>
        {/* <select onChange={handleClick}>
        <option>Select Language</option>
        <option value={"en"}>English</option>

        <option value={"hi"}>Hindi</option>
        <option value={"bn"}>Bangla</option>
      </select> */}
     

        <header>
          <h1 className="fw-bold">{t("title")}</h1>
          <p>{t("description")}</p>
        </header>
        <section>
          <h4 className="fw-bold">{t("title1")}</h4>
          <p>{t("description2")}</p>

          <h4 className="fw-bold">{t("title2")}</h4>
          <p>{t("description2")}</p>

          <h4 className="fw-bold">{t("title3")}</h4>
          <p>{t("description3")}</p>
        </section>
      </div>
 
  );
}

export default App;
