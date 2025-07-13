export default function Portfolio() {
  const items = [
    { id: 1, title: 'Threads', subtitle: 'Illustration', img: '/assets/img/portfolio/1.jpg' },
    { id: 2, title: 'Explore', subtitle: 'Graphic Design', img: '/assets/img/portfolio/2.jpg' },
    { id: 3, title: 'Finish', subtitle: 'Identity', img: '/assets/img/portfolio/3.jpg' },
    { id: 4, title: 'Lines', subtitle: 'Branding', img: '/assets/img/portfolio/4.jpg' },
    { id: 5, title: 'Southwest', subtitle: 'Website Design', img: '/assets/img/portfolio/5.jpg' },
    { id: 6, title: 'Window', subtitle: 'Photography', img: '/assets/img/portfolio/6.jpg' }
  ];

  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">Our latest work.</h3>
        </div>
        <div className="row">
          {items.map(item => (
            <div className="col-lg-4 col-sm-6 mb-4" key={item.id}>
              <div className="portfolio-item">
                <a className="portfolio-link" href={item.img} data-bs-toggle="modal">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={item.img} alt={item.title} />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">{item.title}</div>
                  <div className="portfolio-caption-subheading text-muted">{item.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}