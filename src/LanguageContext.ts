import React from "react";

export const LanguageContext = React.createContext({
    language: "En",
    setLanguage: (language: string) => {},
});