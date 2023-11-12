import React, {useState,useEffect,useMemo,createContext,} from "react";
import Search from "./Search";
import NoteCom from "./NoteCom";
import CreateNote from "./CreateNote"
import "./Project.css";
import { useTranslation } from "react-i18next";
export const NoteContext = createContext(null);
function Project() {
  const [Notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [Title, setTitle] = useState("");
  const [search, setsearch] = useState("");
  const [dialog, setdialog] = useState(false);
  const [edit, setedit] = useState(false);
  // const [edited,setedited]=useState("");

const [t]=useTranslation();

  const addNote = () => {
    if (note.trim() !== "" || Title.trim() !== "") {
      const data = {
        id: crypto.randomUUID(),
        title: Title,
        text: note,
        date: new Date().toLocaleDateString(),
      };
      setNotes((pre) => [...pre, data]);
      setNote("");
      setTitle("");
    }
  };
  const Delete = (id) => {
    setNotes((pre) => pre.filter((p) => p.id !== id));
  };
  //  Notes.filter((e)=>e.title.i)
  //   } const searchfun=()=>{

  useEffect(() => {
    if (Notes.length > 0)
      localStorage.setItem("notes-app", JSON.stringify(Notes));
  }, [Notes]);
  useEffect(() => {
    const m = localStorage.getItem("notes-app");
    if (m) setNotes(JSON.parse(m));
  }, []);

  const value = useMemo(() => ({
    note,setNote,Notes, setNotes,search,setsearch,Title,setTitle,Delete,edit,setedit, addNote, dialog, setdialog}), [note,
    setNote,
    Notes,
    setNotes,
    search,
    setsearch,
    Title,
    setTitle,
    Delete,
    edit,
    setedit, addNote, dialog, setdialog]);
  console.log(value);
  return (
    <div className="Page-background">
      <div className="header ">
        <h1>{t("notes")}</h1>
      </div>
      <NoteContext.Provider value={value}>
        <Search />
        <NoteCom />
        {dialog ? <CreateNote /> : (
          <></>
        )}
      </NoteContext.Provider>

      <button className="pop-up" onClick={() => setdialog(!dialog)}>
        +
      </button>
    </div>
  );
}
export default Project;
