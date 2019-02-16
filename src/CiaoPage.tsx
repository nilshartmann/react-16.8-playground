import * as React from "react";
import { Link } from "react-router-dom";
export default function CiaoPage() {
  return (
    <>
      <h1>Ciao</h1>
      <Link to="/hello">Hello</Link>
    </>
  );
}
