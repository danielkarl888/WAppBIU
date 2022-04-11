import activeUser from "../../ManagingUsersList/activeUser";
function TopHeadingLeft() {
    return (
      
        <div className="container-fluid row heading">
            <div className="col-sm-2 col-xs-2 heading-avatar">
                <div className="heading-avatar-icon">
                    <img src="bg-1.jpg" alt="Avatar" className="avatar"></img>
                </div>
            </div>
            <div className="col-sm-8 headingUsername">
                <span className="name-meta" style={{ marginLeft: "40%"}}>{activeUser.display}
                </span>
            </div>
            <div className="col-sm-2 col-xs-2 heading-compose">
               <button className="btn-bg-transparent hiddenbtn"> <i className="bi bi-person-plus-fill" aria-hidden="true" style={{ marginLeft: "40%" }}></i></button>
               
            </div>
        </div>
    );
}
export default TopHeadingLeft;