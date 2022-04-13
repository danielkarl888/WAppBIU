function OutComeMessage({context}) {
    
    return(
        <div className="Outmessage position-relative">
    <div className="Outmes-content position-absolute top-0 end-0">
        <div className="mes-text">
            {context}
        </div>
    </div>
</div>  
    );
}
export default OutComeMessage