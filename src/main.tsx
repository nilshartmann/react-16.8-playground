import * as React from "react";
import * as ReactDOM from "react-dom";
import Editor from "./Editor";

function Hello() {
	return (
		<>
			<h1>Hello</h1>
			<Editor defaultMessage="Hello" />
		</>
	);
}

const mountNode = document.getElementById("app");
ReactDOM.render(<Hello />, mountNode);
