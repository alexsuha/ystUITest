import React from 'react';

import './styles.css';

function PdGarantee() {

    return (
        <div class="warranty-area">
				<div class="container">
					<h2>Our Promise</h2>
					<div class="warranty-row">
						<div class="warranty-col">
							<div class="warranty-block">
								<div class="image-holder">
									<img src={require(`../../static/carnex_website_icons-01.svg`)} alt="image-description"/>
								</div>
								<div class="description">
									<h3>Free 9 Day Returns</h3>
									<p>If you are not satisfied, we will provide a refund after your purchase in the first week. </p>
								</div>
							</div>
						</div>
						<div class="warranty-col">
							<div class="warranty-block">
								<div class="image-holder">
									<img src={require(`../../static/carnex_website_icons-02.svg`)} alt="image-description"/>
								</div>
								<div class="description">
									<h3>100 Day Warranty</h3>
									<p>Our warranty provides protection against the costs of mechanical or electrical breakdown. </p>
								</div>
							</div>
						</div>
						<div class="warranty-col">
							<div class="warranty-block">
								<div class="image-holder">
									<img src={require(`../../static/carnex_website_icons-03.svg`)} alt="image-description"/>
								</div>
								<div class="description">
									<h3>170 Point Inspection</h3>
									<p>Our 170 Point Inspection allows you to see what has been fixed since original ownership.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
}

export default PdGarantee
