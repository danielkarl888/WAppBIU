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
     
        setNewConversation({ username: newConversation.username,name: newConversation.name,
                              server : newConversation.server,
                              messages: [{ src: "", type: "", context: "", time: "", id :"" }] })
                              var server = newConversation.server;
                              
                                fetch(`http://${server}/api/invitations`, {
                                    method: 'POST',
                                        headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({  
                                            "from": activeUser.userName,
                                            "to": newConversation.username,
                                            "server": "localhost:5030"  
                                  }) 
                                }).then(res=>{
                                  if(res.ok){
                                    fetch(`http://localhost:5030/api/Contacts/?user=${activeUser.userName}`, {
                                      method: 'POST',
                                          headers: {
                                          'Content-Type': 'application/json   '
                                      },
                                      body: JSON.stringify({  
                                                              "id": newConversation.username,
                                                              "name": newConversation.name,
                                                              "server": newConversation.server
                                    }) 
                                  }).then(res=>{
                                      if(res.ok){
                                        const update = [...conversationsActiveUser, newConversation];
                                        setConversationsActiveUser(update);
                                      }
                                  })
                                  }
                              })                
    }


    const handleUserNameChange = (event) => {
      setNewConversation({ ...newConversation, username: event.target.value })
  }

  const handleNameChange = (event) => {
    setNewConversation({ ...newConversation, name: event.target.value })
}
const handleServerChange = (event) => {
  setNewConversation({ ...newConversation, server: event.target.value })
}

    const [newConversation, setNewConversation] = useState({
        username: "",
        name:"",
        server:"",
        messages: [{ src: "", type: "", context: "", time: "", id :"" }]
    });

    const userNamesConver = [];
    for (let index = 0; index < conversationsActiveUser.length; index++) {
        userNamesConver.push(conversationsActiveUser[index].username);
    }



    return (
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add new contact</h5>
              <button type="button" className="btn-close" data-dismiss="modal"></button>

            </div>
            <div class="modal-body">
            <div class="input-group mb-3">
            <input
           
            onChange={handleNameChange}
            value={newConversation.name}
            autoComplete="off"
            className="form-control  textarea" rows="1" id="comment" placeholder="contact nickname..."></input>
            </div>

            <div class="input-group mb-3">
            <input
            onChange={handleUserNameChange}
            value={newConversation.username}
            autoComplete="off"
            className="form-control  textarea" rows="1" id="comment" placeholder="contact username..."></input>
            </div>

            <div class="input-group mb-3">
            <input
            onChange={handleServerChange}
            value={newConversation.server}
            autoComplete="off"
            className="form-control  textarea" rows="1" id="comment" placeholder="server address..."></input>
            </div>
            </div>
            <div class="modal-footer">
            <button type="button" onClick={handleAddChange} className="btn btn-success btn-sm addBut" data-dismiss="modal" style={{ width: "20%" }}>Add</button>
              </div>
          </div>
        </div>
      </div>
    );
}

export default AddNewContact;          





