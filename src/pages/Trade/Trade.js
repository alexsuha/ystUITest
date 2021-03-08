import React from 'react'
import './styles.css'
import Footer from '../../components/Footer'

const p1 = {
    padding: "70px 0",
}

const p2 = {
    padding: "70px 0",
    background: "#eee",
}

const p3 = {
    marginBottom: "8px",
}

const p4 = {
    width: "360px",
}

const p5 = {
    marginRight: "5px",
}

function Trade() {
    return (
        <>
        <main class="main">
			<div class="trade-section">
				<div class="container">
					<h2>TRADE WITH CARNEX</h2>
					<div class="trade-row">
						<div class="trade-col">
							<div class="trade-block">
								<div class="image-holder">
									<img src={require(`../../static/img22.png`)} alt="image-description"/>
								</div>
								<div class="description">
									<strong class="title">Apply Online</strong>
									<p>Anywhere, any time</p>
								</div>
							</div>
						</div>
						<div class="trade-col">
							<div class="trade-block">
								<div class="image-holder">
									<img src={require(`../../static/img22.png`)} alt="image-description"/>
								</div>
								<div class="description">
									<strong class="title">Few Simple Steps</strong>
									<p>Just answer a few questions</p>
								</div>
							</div>
						</div>
						<div class="trade-col">
							<div class="trade-block">
								<div class="image-holder">
									<img src={require(`../../static/img22.png`)} alt="image-description"/>
								</div>
								<div class="description">
									<strong class="title">Best Price Guaranteed</strong>
									<p>Most competitive trade-in value</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div className="atFrameContainer">
                <iframe className="atFrame" src="https://cashoffer.accu-trade.com/?dlr=2a17a6097add84d1c43f6b9d7da1e76f7889b5c2"></iframe>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Trade
