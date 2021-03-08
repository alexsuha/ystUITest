import React from 'react'

//TODO: order car name, date, img of car.
const Order = ({ order }) => {

    const getDateStringServ = timestamp => {

        const plus0 = num => `0${num.toString()}`.slice(-2)
      
        const d = new Date(timestamp)
      
        const year = d.getFullYear()
        const monthTmp = d.getMonth() + 1
        const month = plus0(monthTmp)
        const date = plus0(d.getDate())
      
        return `${year}-${month}-${date}`
      }

    const getThreeDaysLaterDateString = timestamp => {
        const plus0 = num => `0${num.toString()}`.slice(-2)
      
        const d = new Date(timestamp)
        d.setDate(d.getDate() + 3)
      
        const year = d.getFullYear()
        const monthTmp = d.getMonth() + 1
        const month = plus0(monthTmp)
        const date = plus0(d.getDate())
        return `${year}-${month}-${date}`
    }

    return (
        <div>
            <div class="vehicle-info-row">
                <div class="image-holder">
                    <img src={order.carimg} alt="image-description"/>
                </div>
                <div class="description">
                    <ul class="info-list">
                        <li>
                            <strong class="title">Vehicle</strong>
                            <span class="text"><a>{order.carname}</a></span>
                        </li>
                        <li>
                            <strong class="title">Deposit Paid</strong>
                            <span class="text">$250.00 CAD on {getDateStringServ(order.bookdate)}</span>
                        </li>
                        <li>
                            <strong class="title">Held Until</strong>
                            <span class="text">{getThreeDaysLaterDateString(order.bookdate)}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Order
