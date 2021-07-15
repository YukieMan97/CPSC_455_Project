import React from 'react'
import Table from './Table'

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <h2>
                    My Orders
                </h2>
                <Table/>
            </div>
        )
    }
}

export default Dashboard;