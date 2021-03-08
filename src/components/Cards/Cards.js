import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'
            // style={{
            //     backgroundImage: "linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)"
            // }}>
            >
            <div className='cards_title'>
                <h1>How it works</h1>
            </div>
            <div className='cards_info'>
                <p>Learn about the YST buying process</p>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="https://yststorage.blob.core.windows.net/public/WP1AA2AY4KDA105740/imspection1.png"
                            text='Explore the vehicle that feeds your need'
                            label='Available'
                            path='/BrowseCar'
                        />
                        <CardItem 
                            src="https://yststorage.blob.core.windows.net/public/WP1AA2AY4KDA105740/imspection1.png"
                            text='Explore the vehicle that feeds your need'
                            label='HotSale'
                            path='/BrowseCar'
                        />
                        <CardItem 
                            src="https://yststorage.blob.core.windows.net/public/WP1AA2AY4KDA105740/imspection1.png"
                            text='Explore the vehicle that feeds your need'
                            label='HotSale'
                            path='/BrowseCar'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
