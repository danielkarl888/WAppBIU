import { useState } from "react";
import activeUser from "../../ManagingUsersList/activeUser";
import userList from "../../ManagingUsersList/userList";



function AddNewContact({ conversationsActiveUser, setConversationsActiveUser }) {
    
    const handleAdd = (event) => {
        if(newConversation.username!="select new contact" && userNamesConver[userNamesConver.length-1]!=newConversation.username){
        event.preventDefault();
        const update = [...conversationsActiveUser, newConversation];
        setConversationsActiveUser(update);
       }
    }

    const handleAddChange = (event) => {
        setNewConversation({ username: event.target.value, messages: [{ src: "", type: "", context: "", time: "" }] })
    }

    const [newConversation, setNewConversation] = useState({
        username: "",
        messages: [{ src: "", type: "", context: "", time: "" }]
    });

    const userNamesConver = [];
    for (let index = 0; index < conversationsActiveUser.length; index++) {
        userNamesConver.push(conversationsActiveUser[index].username);
    }



    return (
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add new contact</h5>
              <button type="button" className="btn-close" data-dismiss="modal"></button>

            </div>
            <div class="modal-body">
            <select
            onChange={handleAddChange}
                class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option value="select new contact" selected >select new contact</option>
                
                {userList.map((value, index) => {
                   
                    if (activeUser.userName != value.userName && !(userNamesConver.includes(value.userName))) {
    
                        return <option>
                            <li key={index}>{value.userName}</li></option>
                    }
                })}
      
            </select>
       
            </div>
            <div class="modal-footer">
            <button type="button" onClick={handleAdd} className="btn btn-success btn-sm addBut" data-dismiss="modal" style={{ width: "20%" }}>Add</button>
              </div>
          </div>
        </div>
      </div>
    );
}

export default AddNewContact;          





