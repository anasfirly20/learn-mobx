import React from "react";
import { observer } from "mobx-react-lite";

type TProps = {
  store: {
    userInfo: TUserInfo;
    updateUser: (name: string) => void;
    addSubject: (name: string) => void;
  };
};

const HomePage = ({ store }: TProps): React.JSX.Element => {
  // Change user
  const changeUser = () => {
    store.updateUser("New Data");
  };

  // Add subject
  const addSubject = () => {
    store.addSubject("Aeronotics");
  };

  return (
    <article className="flex flex-col min-h-screen justify-center items-center">
      <h1>HOMEPAGE</h1>
      <h1>
        {store.userInfo.name} - {store.userInfo.id}
      </h1>
      <button onClick={changeUser}>Update User</button>
      <button onClick={addSubject}>ADD SUBJECT</button>
      {
        // LOOPING SBJECTS ARRAY PRINING HERE, ADD SUB BUTTON CREATED
        store.userInfo.subject.map((key, index) => (
          <p key={index}>{key}</p>
        ))
      }
    </article>
  );
};

export default observer(HomePage);
