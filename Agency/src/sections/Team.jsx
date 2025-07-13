export default function Team() {
  const members = [
    { name: 'Parveen Anand', role: 'Lead Designer', img: '/assets/img/team/1.jpg', twitter:'#', facebook:'#', linkedin:'#' },
    { name: 'Diana Petersen', role: 'Lead Marketer', img: '/assets/img/team/2.jpg', twitter:'#', facebook:'#', linkedin:'#' },
    { name: 'Larry Parker',  role: 'Lead Developer', img: '/assets/img/team/3.jpg', twitter:'#', facebook:'#', linkedin:'#' }
  ];

  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Talented &amp; dedicated.</h3>
        </div>
        <div className="row">
          {members.map(m => (
            <div className="col-lg-4" key={m.name}>
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={m.img} alt={m.name} />
                <h4>{m.name}</h4>
                <p className="text-muted">{m.role}</p>
                <a className="btn btn-dark btn-social mx-2" href={m.twitter} aria-label={`${m.name} Twitter Profile`}><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href={m.facebook} aria-label={`${m.name} Facebook Profile`}><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href={m.linkedin} aria-label={`${m.name} LinkedIn Profile`}><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Our people are what make us great.</p></div>
        </div>
      </div>
    </section>
  );
}