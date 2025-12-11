export default function Landing({ member }) {
  return (
    <section>
      <h1>{member.name}</h1>
      <h2>{member.role}</h2>
      <p>{member.bio}</p>
      <img src={"/public/images/"+member.image} alt={member.name} style={{"height":"200px"}} />
    </section>
  )
}


 


