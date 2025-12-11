export default function MemberSelector({ members, selectedId, setSelectedId }) {
  return (
    <select
      value={selectedId}
      onChange={(e) => setSelectedId(Number(e.target.value))}
    >
      {members.map((m) => (
        <option key={m.id} value={m.id}>
          {m.name}
        </option>
      ))}
    </select>
  );
}


