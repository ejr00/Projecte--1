import { useState, useEffect } from "react";
import MemberSelector from "./components/MemberSelector";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";



export default function App() {
  const [members, setMembers] = useState([]);
  const [selectedId, setSelectedId] = useState(1);
  const [selectedMember, setSelectedMember] = useState(null);
  const [page, setPage] = useState("");

  useEffect(() => {
    fetch("/data/members.json")
      .then((r) => r.json())
      .then((d) => setMembers(d.members));
  }, []);

  useEffect(() => {
    const m = members.find((x) => x.id === selectedId);
    setSelectedMember(m);
  }, [members, selectedId]);



  return (
    <>
      <button onClick={() => setPage("Landing")}>Inicio</button>
      <button onClick={() => setPage("Projects")}>Projectos</button>
      <button onClick={() => setPage("Newsletter")}>Newsletter</button>
      <button onClick={() => setPage("Contact")}>Contacto</button>


      <MemberSelector
        members={members}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />

      {selectedMember && (
        <>
          {page === "Landing" && <Landing member={selectedMember}/> }
          {page === "Projects" && <Projects projects={selectedMember.projects} /> }
          {page === "Newsletter" && <Newsletter /> }
          {page === "Contact" && <Contact /> }
          
        </>
      )}
    </>
  );
}


