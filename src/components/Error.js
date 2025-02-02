import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { data, status, statusText } = err;
  return (
    <div>
      <h2>{status + " " + statusText}</h2>
      <h1>{data}</h1>
    </div>
  );
};

export default Error;
