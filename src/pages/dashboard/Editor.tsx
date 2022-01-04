import { useEffect } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';

export default function Editor() {
    //@ts-ignore
  return <ReactQuill className="h-screen md:h-[70vh] max-w-full" theme="snow" formats={["font"]}/>
}
