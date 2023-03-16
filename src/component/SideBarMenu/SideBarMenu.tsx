import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../LanguageContext";
import { TitleAndLines } from "../TitleAndLines/TitleAndLines";
import { Section } from "../../interfaces/interfaces";
import "./SideBarMenu.scss";
import { getSections } from "../../services/DataService";
import React from "react";

interface SideBarMenuProps {
  // To alter the logo visibility in white or blue
  setVisibility: (visibility: boolean) => void;
}

export const SideBarMenu = (props: SideBarMenuProps) => {
  const { language } = useContext(LanguageContext);
  const [visible, setVisible] = useState(false); //To alter the logo in header 
  const [expendSize, setIsExpendSize] = useState(false); //To expend the sidebar size
  const [sectionData, setSectionData] = useState<Section[]>();

  useEffect(() => {
    const importSectionTitle = async () => {
      const data = await getSections(language);
      setSectionData(data);
    };
    importSectionTitle();
  }, [language]);

  function toggleSidebar() {
    setIsExpendSize(!expendSize);//alter the expend size boolean to know which class to call 
    setVisible(!visible); // alter the visibility boolean to change logo respectively
    props.setVisibility(!visible);
  };

  //call respective function to click
  const expendStyle = expendSize
    ? "openSide" : "closedSide"

  return (
    <>
      <div id="mySidebar" className={"sidebar " + expendStyle}
        dir={language === "Ar" ? "rtl" : "ltr"}>
        <div id="header">
          <div id="toggle" className={visible ? 'open' : ''} onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="content">
          <div
            dir={language === "Ar" ? "rtl" : "ltr"}
            className="sidebar-content"
          >
            {sectionData &&
              sectionData.map((section, index) => {
                return (
                  <div key={index} className="sidebar-content-box">
                    <TitleAndLines
                      title={section.title}
                      lines={section.subSections}
                      page={section.page}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
