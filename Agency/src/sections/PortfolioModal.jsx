export default function PortfolioModal({item}) {
  const { id, title, subtitle, img } = item;
  return (
    <div className="portfolio-modal modal fade" id={`portfolioModal${id}`} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg" alt="Close modal" /></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">{title}</h2>
                  <p className="item-intro text-muted">{subtitle}</p>
                  <img className="img-fluid d-block mx-auto" src={img} alt={title} />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <ul className="list-inline">
                    <li><strong>Client:</strong> Threads</li>
                    <li><strong>Category:</strong> Illustration</li>
                  </ul>
                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                    <i className="fas fa-times me-1"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}