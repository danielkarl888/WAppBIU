import activeUser from "../../ManagingUsersList/activeUser";
function TopHeadingLeft({conversationsActiveUser, setConversationsActiveUser}) {
    return (

        <div className="container-fluid row heading">
            <div className="col-sm-2 col-xs-2 heading-avatar">
                <div className="heading-avatar-icon">
                    <img src="bg-1.jpg" alt="Avatar" className="avatar"></img>
                </div>
            </div>
            <div className="col-sm-8 headingUsername">
                <span className="name-meta" style={{ marginLeft: "40%" }}>{activeUser.display}
                </span>
            </div>
            <div className="col-sm-2 col-xs-2 heading-compose">
                <button type="button" className="btn-bg-transparent hiddenbtn" data-toggle="modal" data-target=".bd-example-modal-lg"> <i className="bi bi-person-plus-fill" aria-hidden="true" style={{ marginLeft: "40%" }}></i></button>

                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            ...
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default TopHeadingLeft;