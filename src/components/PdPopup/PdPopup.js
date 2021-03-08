import React, { useEffect } from 'react';
import $ from 'jquery';
import { setCurrentPopPage } from '../../store/actions/popup';

const PdPopup = ({
    children,
    label,
    id,
    popstyle,
}) => {

    useEffect(() => {
        $(`#${id}`).find(".popup-header").on("click", function() {
            var popuptext = $(this).parent(".popup").find(".popuptext");
            popuptext.toggleClass("show");
            setCurrentPopPage(popuptext);
        });
        $(`#${id}`).find(".close").on("click", function() {
            var popuptext = $(this).parent(".popuptext");
            popuptext.toggleClass("show");
        });
        $(`#${id}`).find(".apply").on("click", function() {
            var popuptext = $(this).parents(".popuptext");
            popuptext.toggleClass("show");
        });
    }, []);

    return (
            <div className="popup" id={id}>
                <div className="search-result-li popup-header">
                    <span>{label}</span>
                    <span className="search-filter-term"> > </span>
                </div>
                <div className="shadow-div popuptext" style={popstyle}>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="fa fa-times" aria-hidden="true"></span></button>
                    {children}
                </div>
            </div>
    )
}

export default PdPopup
