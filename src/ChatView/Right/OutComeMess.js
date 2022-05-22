function OutComeMessage({context, time}) {
    
    return(
        <div class="row message">
        <div class="col-sm-12 message-main-sender">
          <div class="sender">
            <div class="mes-text">
             {context}
            </div>
            <div class="mes-text-time">
              {time}
            </div>
          </div>
        </div>
      </div>
        
        




        
    );
}
export default OutComeMessage