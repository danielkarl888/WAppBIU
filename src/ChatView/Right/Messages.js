
function Message({context, time}) {
    
    return(
        <div className="message">
    <div className="mes-content">
        <div className="mes-text">
            {context}
        </div>
        <div className="mes-text-time">{time}</div>


    </div>
</div>  
    );
   
}
export default Message

