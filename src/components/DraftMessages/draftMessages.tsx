import { Header } from "../Shared/header";
import { Theme } from "@fluentui/react-components";
import "./draftMessages.css";

interface IDraftMessages {
  theme: Theme;
}

export const DraftMessages = (props: IDraftMessages) => {
  return (
    <>
      <Header theme={props.theme} />

      <main className="cc-draft">
        <h1 className="cc-draft-title">Draft Messages</h1>
      </main>
    </>
  );
};
