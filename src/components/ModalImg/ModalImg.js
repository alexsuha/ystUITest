import React from 'react'


const ModalImg = ({imgsrc}) => {

    const p1 = {
        marginTop: '10px',
    }

    return (
        <div className="modal fade" id="imageModal" tabindex="-1" role="dialog">
            <button type="button" className="close" style={p1} data-dismiss="modal" aria-label="Close"><span className="fa fa-times" aria-hidden="true"></span></button>
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">               
                    <img alt="image" id="modal-image" src={imgsrc}/>
                </div>
            </div>
        </div>
    )
}

export default ModalImg
