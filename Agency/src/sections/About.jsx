export default function About() {
  const timeline = [
    { date: '2009‑2011', title: 'Our Humble Beginnings', text: 'A short description about the beginning.' },
    { date: 'March 2011', title: 'An Agency is Born', text: 'A short description about the agency.' },
    { date: 'December 2015', title: 'Transition to Full Service', text: 'We transitioned to full service.' },
    { date: 'July 2020', title: 'Phase Two Expansion', text: 'We expanded internationally.' }
  ];

  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">A little history of our company.</h3>
        </div>
        <ul className="timeline">
          {timeline.map((e, idx) => (
            <li key={idx} className={idx % 2 === 1 ? 'timeline-inverted' : ''}>
              <div className="timeline-image"><h4>{e.date.split('-')[0]}<br />{e.date.split('-')[1] || ''}</h4></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>{e.date}</h4>
                  <h4 className="subheading">{e.title}</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">{e.text}</p></div>
              </div>
            </li>
          ))}
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />Of Our
                <br />Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}