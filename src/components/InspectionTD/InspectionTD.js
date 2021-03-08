import React from 'react'

const InspectionTD = ({
    id,
    element,
}) => {
    return (
        <>
            <li>
                <span class="num">{id}</span>
                <span class="text">{element.name}</span>
                {(element.status === "FIXED") ? (
                    <>
                    <span class="info-text"><i class="icon icon-info"></i></span>
                    <span class="status-text"></span>
                    </>
                ) : (
                    <>
                    <span class="info-text"></span>
					<span class="status-text"><i class="icon icon-tick"></i></span>
                    </>
                )}
            </li>
        </>
    )
}

export default InspectionTD
