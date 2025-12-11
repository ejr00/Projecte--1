export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();       // evita que la pàgina es recarregui
    alert("El missatge s'ha enviat correctament!"); 
  };

  return (
    <section id="contact" className="contact">
      <h2>Contacta amb mi</h2>
      <p>Vols col·laborar en un projecte o tens alguna pregunta? Escriu-me!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nom complet" 
          required 
        />
        <input 
          type="email" 
          placeholder="Correu electrònic" 
          required 
        />
        <textarea 
          placeholder="Escriu el teu missatge..." 
          rows="5" 
          required
        ></textarea>
        <button type="submit">Enviar missatge</button>
      </form>
    </section>
  );
}


