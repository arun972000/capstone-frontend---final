import { Vchart } from "./chart/Vchart"
import Stripedbar from "./dashboard content/progress"
import Table from "./dashboard content/table"
import "./Dashboard.css"


const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-12 col-lg-7">
                <div className="card shadow  mb-5 bg-body-tertiary rounded">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Monthly Recap Report</h6>
                    </div>
                    <div className="card-body">
                        <Vchart />
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-5 mt-5">
                <div className="card shadow  mb-5 bg-body-tertiary rounded">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-secondary">Products Sold</h6>
                    </div>
                    <div className="card-body">
                        <Stripedbar />
                    </div>
                    <div className="card-footer text-center">
                  <a className="m-0 small text-primary card-link" href="#">View More <i className="fas fa-chevron-right"></i></a>
                </div>
                </div>
            </div>
            <Table/>
        </div>

    )
}

export default Dashboard