import contacts from "./contacts";

function Contact() {
    return (
        <li class="list-group-item">
            <div class="row sideBar-body">
                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                    <div class="heading-avatar-icon">
                        <img src="bg-1.jpg" alt="Avatar" class="avatar"></img>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-9 sideBar-main">
                    <div class="row mid-con">

                        <div class="row col-xs-8 sideBar-name">
                            <span class="name-meta ">dvir
                            </span>
                        </div>
                        <div class="row col-xs-4 pull-right last-messege">
                            <span class="time-meta pull-right">hey
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3 col-xs-9 sideBar-time"><span class="time-meta pull-right">12:00
                </span>
                </div>
            </div>
        </li>
    );
}

export default Contact;