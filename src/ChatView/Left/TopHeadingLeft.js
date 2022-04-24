import activeUser from "../../ManagingUsersList/activeUser";
import { useState } from "react";
import AddNewContact from "./AddNewContact";
function TopHeadingLeft({ conversationsActiveUser, setConversationsActiveUser }) {


    return (
        <>
        <div className="container-fluid row heading">
            <div className="col-sm-2 col-xs-2 heading-avatar">
                <div className="heading-avatar-icon">
                    <img src="profileimage.jpg" alt="Avatar" className="avatar"></img>
                </div>
            </div>
            <div className="col-sm-8 headingUsername">
                <span className="name-meta" style={{ marginLeft: "40%" }}>{activeUser.display}
                </span>
            </div>
            <div className="col-sm-2 col-xs-2 heading-compose">
                <button type="button" className="btn btn-outline-secondary hiddenbtnAdd" data-toggle="modal" data-target="#addModal"> <i className="bi bi-person-plus-fill" aria-hidden="true" style={{ marginLeft: "40%" }}></i> </button>


            </div>
        </div>
        <AddNewContact conversationsActiveUser={conversationsActiveUser}
        setConversationsActiveUser={ setConversationsActiveUser}
        />
        </>



    );
}
export default TopHeadingLeft;