'use client';

import { useRef, useState } from "react";
import { Label } from "reactstrap";
import JoditEditor from "jodit-react";

const Editor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");  // use lowercase `content`

  return (
    <div>
      <Label for="content">Post Content</Label>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default Editor;

