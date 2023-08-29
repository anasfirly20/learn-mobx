import React from "react";
import { observer } from "mobx-react-lite";

type TProps = {
  store: {
    userInfo: TUserInfo;
  };
};
const HomePage = ({ store }: TProps): React.JSX.Element => {
  return (
    <article className="flex flex-col min-h-screen justify-center items-center">
      <h1>HOMEPAGE</h1>
      <h1>
        {store.userInfo.name} - {store.userInfo.id}
      </h1>
    </article>
  );
};

export default observer(HomePage);
