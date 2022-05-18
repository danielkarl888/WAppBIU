import { useState } from 'react';
import { useEffect } from "react";
import axios from "axios";

const useUsers = () => {

const [userList, setUserList_server] = useState([]);

useEffect(()=>{
    const func= async()=>{
        const res = await fetch('http://localhost:5030/api/Users');
        console.log(res);
        const data = await res.json();
        console.log(data);
        setUserList_server(data);
    }
    func();
},[]);
return [userList];

}; export default useUsers;