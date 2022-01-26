import { Outlet } from "react-router-dom";

const InitSession = () => {
  return (
    <div>
      <h1>From Init Session</h1>

      <Outlet />

    </div>
  );
};

export default InitSession;
