import React from "react";
import { observer } from "mobx-react-lite";

type TProps = {
  store: {
    userInfo: TUserInfo;
    updateUser: (name: string) => void;
    addSubject: (name: string) => void;
  };
};

const AboutPage = ({ store }: TProps): React.JSX.Element => {
  return (
    <article className="flex flex-col min-h-screen justify-center items-center">
      <h1>ABOUT</h1>
      <h1>{store.userInfo.name && store.userInfo.name}</h1>
    </article>
  );
};

export default observer(AboutPage);
