function ReplayRow() {
    return (
        <div class="row d-flex align-items-center reply">
            <div class="col-sm-1 col-xs-1 reply-paperclip">
                <div class="btn-group dropup">
                    <button type="button" class="btn btn dropdown hiddenbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="bi bi-paperclip"></i>
                    </button>
                    <div class="dropdown-menu">
                        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group-vertical mr-2" role="group" aria-label="First group">
                                <button type="button" class="btnS"><i class="bi bi-image" style={{color:"black"}}></i></button>
                                <button type="button" class="btnS "><i class="bi bi-camera-fill" style={{color:"black"}}></i></button>
                                <button type="button" class="btnS "><i class="bi bi-music-note-beamed" style={{color:"black"}}></i></button>
                                <button type="button" class="btnS"><i class="bi bi-mic-fill" style={{color:"black"}}></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-10 col-xs-9 replymain">
                <input class="form-control  textarea" rows="1" id="comment" placeholder="type a message..."></input>
            </div>
            <div class="col-sm-1 col-xs-1 reply-send">
                <button className="btn-bg-transparent hiddenbtn">  <i class="bi bi-send-fill" aria-hidden="true"></i> </button>
            </div>
        </div>
    );
}
export default ReplayRow;
