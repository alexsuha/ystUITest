import React from 'react';

import './styles.css';

const PdWarranty = ({
    product,
}) => {

    const {engine, uuid, doors, torque, fueltype, printedkeys, horsepower, drivetrain, hightlightfeature, specificationreport } = product;
    const features = JSON.parse(`${hightlightfeature}`);

    const [showResults, setShowResults] = React.useState(false)

    const expand = () => {
        const bShow = showResults;
        setShowResults(!bShow);
        //console.log(hightlightfeature);
    }

    return (
        <>
            <div class="product-info-area">
				<div class="container">
					<div class="product-info-block">
						<h2>Specifications</h2>
						<ul class="info-list">
							<li>
								<strong class="title">Drivetrain</strong>
								<span class="text">{drivetrain}</span>
							</li>
							<li>
								<strong class="title">Horsepower</strong>
								<span class="text">{horsepower}</span>
							</li>
							<li>
								<strong class="title">Printed Keys</strong>
								<span class="text">{printedkeys}</span>
							</li>
							<li>
								<strong class="title">VIN</strong>
								<span class="text">{uuid}</span>
							</li>
							<li>
								<strong class="title">Engine</strong>
								<span class="text">{engine}</span>
							</li>
							<li>
								<strong class="title">Fuel, Type, Capacity</strong>
								<span class="text">{fueltype}</span>
							</li>
							<li>
								<strong class="title">Torque</strong>
								<span class="text">{torque}</span>
							</li>
							<li>
								<strong class="title">Doors</strong>
								<span class="text">{doors}</span>
							</li>
						</ul>
					</div>
					<div class="product-info-block">
						<h2>KEY Features</h2>
						<ul class="info-list features">
                            {features.map((feature, i) =>
                                    (
                                        <li>
                                            <strong class="title">{feature}</strong>
                                        </li>
                                    ),
                                )}
						</ul>
                        {specificationreport !== "" ? (
                            <a href={specificationreport} className="btn-secondary-outline">DOWNLOAD VEHICLE BROCHURE</a>
                        ) : (<div></div>)}
					</div>
				</div>
			</div>
        </>
    );
}

export default PdWarranty
