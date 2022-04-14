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
                <span className="name-meta" style={{ marginLeft: "40%" }}>{activeUser.display}
                </span>
            </div>
            <div className="col-sm-2 col-xs-2 heading-compose">
                <button type="button" className="btn-bg-transparent hiddenbtn" data-toggle="modal" data-target=".bd-example-modal-lg"> <i className="bi bi-person-plus-fill" aria-hidden="true" style={{ marginLeft: "40%" }}></i></button>

                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            ...
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default TopHeadingLeft;