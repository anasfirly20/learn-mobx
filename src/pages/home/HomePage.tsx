import React from "react";
import { observer } from "mobx-react-lite";

type TProps = {
  store: {
    userInfo: TUserInfo;
    updateUser: (name: string) => void;
  };
};

const HomePage = ({ store }: TProps): React.JSX.Element => {
  const changeUser = () => {
    store.updateUser("New Data");
  };

  return (
    <article className="flex flex-col min-h-screen justify-center items-center">
      <h1>HOMEPAGE</h1>
      <h1>
        {store.userInfo.name} - {store.userInfo.id}
      </h1>
      <button onClick={changeUser}>Update User</button>
    </article>
  );
};

export default observer(HomePage);
