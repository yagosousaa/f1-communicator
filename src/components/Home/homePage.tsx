import { Header } from "../Shared/header";
import { Theme } from "@fluentui/react-components";
import "./homePage.css";

interface IHomePage {
  theme: Theme;
}

export const HomePage = (props: IHomePage) => {
  return (
    <>
      <Header theme={props.theme} />

      <main className="cc-main">
        <h1 className="cc-main-title">Visão geral</h1>
      </main>
    </>
  );
};
