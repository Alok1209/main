import React,{useContext as alok} from "react";
import { MdDelete } from "react-icons/md";
import {NoteContext} from "./Project";
// import NoteContext from "./Project";
function NoteCom(){
  const {Notes,search,Delete}=alok(NoteContext);
    return(
         <div className="note-list">
        {Notes.filter((n)=>n.title.toLowerCase().includes(search.toLowerCase())||n.text.toLowerCase().includes(search.toLowerCase())).map((n) => (
          <div key={n.id} className="note"  >
            <h4>{n.title}</h4>
            <p>{n.text}</p>
            <p className="note-list-footer"> <small>{n.date}</small>
              <MdDelete onClick={() => Delete(n.id)}></MdDelete> </p>
          </div>
        ))}</div>
       
    )
}
export default NoteCom;