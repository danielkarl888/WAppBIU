import contacts from "./contacts";
 
function Contact({name, lastMessageContent, time}) {
    return (
        <li className="list-group-item">
            <div className="row sideBar-body">
                <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="heading-avatar-icon">
                        <img src="bg-1.jpg" alt="Avatar" className="avatar"></img>
                    </div>
                </div>
                <div className="col-sm-6 col-xs-9 sideBar-main">
                    <div className="row mid-con">

                        <div className="row col-xs-8 sideBar-name">
                            <span className="name-meta ">{name}
                            </span>
                        </div>
                        <div className="row col-xs-4 pull-right last-messege">
                            <span className="time-meta pull-right">{lastMessageContent}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 col-xs-9 sideBar-time"><span className="time-meta pull-right">{time}
                </span>
                </div>
            </div>
        </li>
    );
}

export default Contact;