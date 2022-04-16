function OutComeMessage({context, time}) {
    
    return(
        <div className="Outmessage position-relative">
    <div className="Outmes-content position-absolute top-0 end-0">
        <div className="mes-text">
            {context}
        </div>
        <div className="mes-text-time">{time}</div>
    </div>
</div>  
    );
}
export default OutComeMessage