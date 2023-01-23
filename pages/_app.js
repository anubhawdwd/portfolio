import { useState } from "react";
import "../styles/globals.css";
import { GlobalState } from "../data/contextAPI/GlobalState";
import { items } from "../data/data";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const [projectData, setProjectData] = useState(items);
  const [activeBtn, setActiveBtn] = useState("All");
  //  *-*-*-*-*-*-*-*-*-*-**-*-*-

  const MenuChange = (item) => {
    setActiveBtn(item);
    if (item === "All") {
      return setProjectData(items);
    }
    const newItems = items.filter((i) => i.category === item);
    setProjectData(newItems);
  };
  //  *-*-*-*-*-*-*-*-*-*-**-*-*-*

  const MenuItems = [
    "All",
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];
  //  *-*-*-*-*-*-*-*-*-*-**-*-*-*

  const ActiveBtnStyle = (index) => {
    if (MenuItems[index] == activeBtn) {
      return "shadow-inner shadow-red-500";
    } else {
      return "shadow-cyan-500";
    }
  };
  //  *-*-*-*-*-*-*-*-*-*-**-*-*-*

  return (
    <GlobalState.Provider
      value={{
        projectData,
        darkMode,
        setDarkMode,
        MenuChange,
        MenuItems,
        ActiveBtnStyle,
      }}
    >
      <Component {...pageProps} />
    </GlobalState.Provider>
  );
}
