import React from 'react'
import ViewSellerProfile from '../../landing/ViewSellerProfile'
import client from '../../../API/api';

const Order = (props) => {
    let order = props.order
    console.log(order)
    console.log(order.seller)
    return (
        <tr key={props.index}>
            <td>{order.id}</td>
            <td>
                {!order.furnitures
                    ? ""
                    : order.furnitures.map((furniture, index) => {
                        return (
                            <p key={index}>{furniture.name} (${furniture.price})</p>
                        )
                    })}
            </td>
            <td>{order.totalAmount}</td>
            <td><ViewSellerProfile userInfo={order.seller} page="order-history" /></td>
            <td>{order.paymentType}</td>
        </tr>
    )
}

export default Order