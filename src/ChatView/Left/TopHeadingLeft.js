function TopHeadingLeft() {
    return (
      
        <div class="container-fluid row heading">
            <div class="col-sm-2 col-xs-2 heading-avatar">
                <div class="heading-avatar-icon">
                    <img src="bg-1.jpg" alt="Avatar" class="avatar"></img>
                </div>
            </div>
            <div className="col-sm-8 headingUsername">
                <span class="name-meta" style={{ marginLeft: "40%"}}>Dvir
                </span>
            </div>
            <div class="col-sm-2 col-xs-2 heading-compose">
               <button className="btn-bg-transparent hiddenbtn"> <i class="bi bi-person-plus-fill" aria-hidden="true" style={{ marginLeft: "40%" }}></i></button>
               
            </div>
        </div>
    
    );
}
export default TopHeadingLeft;