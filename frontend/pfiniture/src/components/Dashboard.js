import React from 'react'
import Table from './Table'
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar></Sidebar>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <div
                        className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                    </div>
                    <div>
                        <Table></Table>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard