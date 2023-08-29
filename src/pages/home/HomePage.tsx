import store from "../../mobx-store/TodoStore";
import { observer } from "mobx-react";

const HomePage = (): React.JSX.Element => {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      {store.todos.map((e) => (
        <p>{e.name}</p>
      ))}
    </div>
  );
};
export default observer(HomePage);
