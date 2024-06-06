import { Header } from "../Shared/header";
import { Theme } from "@fluentui/react-components";
import "./sendMessages.css";

interface ISendMessages {
  theme: Theme;
}

export const SendMessages = (props: ISendMessages) => {
  return (
    <>
      <Header theme={props.theme} />

      <main className="cc-send">
        <h1 className="cc-send-title">Send Messages</h1>
      </main>
    </>
  );
};
