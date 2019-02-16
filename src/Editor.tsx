import * as React from "react";
import * as styles from "./Editor.scss";

interface EditorProps {
	defaultMessage: string;
}

function Editor({ defaultMessage }: EditorProps) {
	const [value, setValue] = React.useState(defaultMessage);

	return <input className={styles.Editor} type="text" value={value} onChange={e => setValue(e.currentTarget.value)} />;
}

export default Editor;
