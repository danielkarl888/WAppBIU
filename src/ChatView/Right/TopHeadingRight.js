
function TopheadingRight() {
    return (
        <div class="container-fluid row heading">
          <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
          <div class="heading-avatar-icon">
          <img src="bg-1.jpg" alt="Avatar" class="avatar"></img>
      </div>
          </div>
          <div class="col-sm-8 col-xs-7 heading-name">
            <div class="heading-name-meta">John Doe
            </div>
            <span class="heading-online">Online</span>
          </div>
          <div class="col-sm-1 col-xs-1  heading-dot pull-right">
            <i class="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
          </div>
</div>
      
    );
  }
  
  export default TopheadingRight;