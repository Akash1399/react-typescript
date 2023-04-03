import React from "react";
type StatusProps = {
  status: "loading" | "success" | "error";
};
function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "loading";
  } else if (props.status === "success") {
    message = "success";
  } else if (props.status) {
    message = "error";
  }
  return <div>
    <h1>{message}</h1>
  </div>;
}

export default Status;
