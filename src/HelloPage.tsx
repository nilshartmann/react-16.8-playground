import * as React from "react";
import { Link } from "react-router-dom";
import Editor from "./Editor";

export default function HelloPage() {
  return (
    <>
      <h1>Hello</h1>
      <Editor defaultMessage="Hello" />

      <Link to="/ciao">Ciao!</Link>
    </>
  );
}
