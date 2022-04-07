function ReplayRow() {
    return (
        <div class="row d-flex align-items-center reply">
            <div class="col-sm-1 col-xs-1 reply-paperclip">
            <i class="bi bi-paperclip"></i>
            </div>
            <div class="col-sm-10 col-xs-9 reply-main">
                <input class="form-control textarea" rows="1" id="comment"></input>
            </div>
            <div class="col-sm-1 col-xs-1 reply-send">
                <i class="bi bi-send-fill" aria-hidden="true"></i>
            </div>
        </div>
    );
}
export default ReplayRow;
