import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../LanguageContext";
import { getSections } from "../../services/DataService";
import { Section } from "../../interfaces/interfaces";
import { SideBarMenu } from "../../component/SideBarMenu/SideBarMenu";
import './Header.scss';
import React from "react";

export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [, setSectionData] = useState<Section[]>();
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const importSectionTitle = async () => {
      const data = await getSections(language);
      setSectionData(data);
    };
    importSectionTitle();
  }, [language]);

  const setSideMenuVisibility = (visibilityParams: boolean) => {
    //debugger
    setVisibility(visibilityParams);
  };
  return (
    <div dir={language === "Ar" ? "rtl" : "ltr"} className="header">
      <div dir={language === "Ar" ? "rtl" : "ltr"} className="header">
        <div className="side" dir={language === "Ar" ? "rtl" : "ltr"}>
          <SideBarMenu setVisibility={setSideMenuVisibility} />
        </div>
      </div>
    </div>
  );
};
