
function TopheadingRight({contact}) {
    return (
        <div className="container-fluid row headingRight">
            <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div className="heading-avatar-icon">
                    {contact!="" ? <img src="profileimage.jpg" alt="Avatar" className="avatar"></img> : null}
                </div>
            </div>
            <div className="col-sm-8 col-xs-7 heading-name">
                <div className="heading-name-meta">{contact}</div>
                <span className="heading-online">{contact!=""? "Online" : null}</span>
            </div>
        </div>
    );
  }
  
  export default TopheadingRight;