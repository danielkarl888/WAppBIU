import { useState } from "react";
import { useRef } from "react";

import activeUser from "../../ManagingUsersList/activeUser";
import userList from "../../ManagingUsersList/userList";
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from "react-bootstrap";





function AddNewContact({ conversationsActiveUser, setConversationsActiveUser }) {

    
    const handleAdd = (event) => {
        event.preventDefault();
        const update = [...conversationsActiveUser,newConversation ];
        setConversationsActiveUser(update);
        console.log(conversationsActiveUser);

    }

    const handleAddChange = (event) => {
        console.log(event.target.value);
        setNewConversation({username:event.target.value,messages:[{ src: "", type: "", context: "", time: "" }]})

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
        <form className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add new contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <select 
                        onChange={handleAddChange}
                            class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option selected>select new contact</option>
                            {userList.map((value, index) => {
                                if (activeUser.userName != value.userName && !(userNamesConver.includes(value.userName))) {
                                    return <option>
                                     <li key={index}>{value.userName}</li></option>
                                }
                            })}
                            
                           </select>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleAdd} className="btn btn-success btn-sm"  style={{ width: "20%" }}>Add</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddNewContact;          