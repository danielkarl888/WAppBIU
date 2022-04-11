function ReplayRow() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(10);
    }

    return (
        <div className="row d-flex align-items-center reply">
            <div className="col-sm-1 col-xs-1 reply-paperclip">
                <div className="btn-group dropup">
                    <button type="button" className="btn btn dropdown hiddenbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bi bi-paperclip"></i>
                    </button>
                    <div className="dropdown-menu">
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group-vertical mr-2" role="group" aria-label="First group">
                                <button type="button" className="btnS"><i className="bi bi-image" style={{color:"black"}}></i></button>
                                <button type="button" className="btnS "><i className="bi bi-camera-fill" style={{color:"black"}}></i></button>
                                <button type="button" className="btnS "><i className="bi bi-music-note-beamed" style={{color:"black"}}></i></button>
                                <button type="button" className="btnS"><i className="bi bi-mic-fill" style={{color:"black"}}></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-10 col-xs-9 replymain">
                <input autoComplete="off" className="form-control  textarea" rows="1" id="comment" placeholder="type a message..."></input>
            </div>
            <div className="col-sm-1 col-xs-1 reply-send">
                <button onClick={handleSubmit} className="btn-bg-transparent hiddenbtn">  <i className="bi bi-send-fill" aria-hidden="true"></i> </button>
            </div>
        </div>
    );
}
export default ReplayRow;
