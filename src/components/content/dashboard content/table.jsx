import "./table.css"

const Table = () => {
  return (
    <div><div className="col-xl-8 col-lg-7 mb-4">
    <div className="card shadow  mb-5 bg-body-tertiary rounded">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Invoice</h6>
        <a className="m-0 float-right btn btn-danger btn-sm" href="#">View More <i className="fas fa-chevron-right"></i></a>
      </div>
      <div className="table-responsive">
        <table className="table align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Item</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">RA0449</a></td>
              <td>Udin Wayang</td>
              <td>Nasi Padang</td>
              <td><span className="badge badge-success">Following</span></td>
              <td><a href="#" className="btn btn-sm btn-primary">Detail</a></td>
            </tr>
            <tr>
              <td><a href="#">RA5324</a></td>
              <td>Jaenab Bajigur</td>
              <td>Gundam 90s Edition</td>
              <td><span className="badge badge-info">Mutual</span></td>
              <td><a href="#" className="btn btn-sm btn-primary">Detail</a></td>
            </tr>
            <tr>
              <td><a href="#">RA8568</a></td>
              <td>Rivat Mahesa</td>
              <td>Oblong T-Shirt</td>
              <td><span className="badge badge-info">Mutual</span></td>
              <td><a href="#" className="btn btn-sm btn-primary">Detail</a></td>
            </tr>
            <tr>
              <td><a href="#">RA1453</a></td>
              <td>Indri Junanda</td>
              <td>Hat Rounded</td>
              <td><span className="badge badge-info">Mutual</span></td>
              <td><a href="#" className="btn btn-sm btn-primary">Detail</a></td>
            </tr>
            <tr>
              <td><a href="#">RA1998</a></td>
              <td>Udin Cilok</td>
              <td>Baby Powder</td>
              <td><span className="badge badge-success">Following</span></td>
              <td><a href="#" className="btn btn-sm btn-primary">Detail</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div></div>
  )
}

export default Table