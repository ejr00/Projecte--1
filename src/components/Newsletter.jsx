export default function Newsletter() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("T'has subscrit correctament al newsletter!");
  };

  return (
    <section id="newsletter" className="newsletter">
      <h2>Subscriu-te al Newsletter</h2>
      <p>Mira que bé la IA t'ajuda amb tots els problemes que tens i dóna suggeriments La nova actualització de la IA fa un gran salt, dóna millors respostes i suggereix possibles coses que et podien ajudar</p>
      <img src={"./public/images/Img-news.jpg"}  style={{"height":"400px"}}/>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Introdueix el teu email..." 
          required 
        />
        <button type="submit">Subscriu-me</button>
      </form>
    </section>
  );
}


