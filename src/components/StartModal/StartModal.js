import React from 'react'

const StartModal = () => {

    const p1 = {
        margin: '30px 0 12px 0',
    }

    const p2 = {
        fontSize: '32px',
    }

    const p3 = {
        fontSize: '16px',
    }

    const p4 = {
        width: '50%',
        height: '50px',
    }

    return (
        <div class="modal fade" id="startModal1" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="fa fa-times" aria-hidden="true"></span></button>
                    </div>
                    <div class="modal-body">
                        <div class="quickview-content">
                            <div class="quickview-paragraph text-center my-2">
                                <h2 style={p1}>Please signing up first</h2>
                            </div>
                            <div class="row mt-4 mb-5">
                                <div class="offset-1 col-lg-10 text-center">
                                    <p class="my-4">If you have any questions please sent an email to support@carnex.ca, we will reply to you ASAP. Feel free to contact carnex at (905) 260-5667<br/>Monday-Saturday 8 a.m. to 8 p.m.</p>
                                    <div class="d-flex justify-content-center">
                                        <div class="modal-sold d-flex align-items-center justify-content-center">
                                            <div>
                                                <span style={p2}>carnex</span><br/>
                                                <span style={p3}>Thank you!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mb-5">
                                <button class="button-yellow text-md" style={p4} data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartModal
