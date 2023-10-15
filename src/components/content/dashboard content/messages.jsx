

const Messages = () => {
  return (
   <div className="col-xl-4 col-lg-5 ">
    <div className="card">
      <div className="card-header py-4 bg-primary d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-light">Message From Customer</h6>
      </div>
      <div>
        <div className="customer-message align-items-center">
          <a className="font-weight-bold" href="#">
            <div className="text-truncate message-title">Hi there! I am wondering if you can help me with a
              problem Ive been having.</div>
            <div className="small text-gray-500 message-time font-weight-bold">Udin Cilok · 58m</div>
          </a>
        </div>
        <div className="customer-message align-items-center">
          <a href="#">
            <div className="text-truncate message-title">But I must explain to you how all this mistaken idea
            </div>
            <div className="small text-gray-500 message-time">Nana Haminah · 58m</div>
          </a>
        </div>
        <div className="customer-message align-items-center">
          <a className="font-weight-bold" href="#">
            <div className="text-truncate message-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div className="small text-gray-500 message-time font-weight-bold">Jajang Cincau · 25m</div>
          </a>
        </div>
        <div className="customer-message align-items-center">
          <a className="font-weight-bold" href="#">
            <div className="text-truncate message-title">At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis
            </div>
            <div className="small text-gray-500 message-time font-weight-bold">Udin Wayang · 54m</div>
          </a>
        </div>
        <div className="card-footer text-center">
          <a className="m-0 small text-primary card-link" href="#">View More <i className="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Messages