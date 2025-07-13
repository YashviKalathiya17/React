import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });

  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: replace with real endpoint
    alert(`Thanks, ${form.name}! We will contact you soon.`);
    setForm({ name:'', email:'', phone:'', message:'' });
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Send us a message and we will get back to you.</h3>
        </div>
        <form id="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input className="form-control" id="name" type="text" placeholder="Your Name *" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input className="form-control" id="email" type="email" placeholder="Your Email *" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group mb-md-0">
                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" value={form.phone} onChange={handleChange} required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea className="form-control" id="message" placeholder="Your Message *" value={form.message} onChange={handleChange} required></textarea>
              </div>
            </div>
          </div>
          <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button></div>
        </form>
      </div>
    </section>
  );
}