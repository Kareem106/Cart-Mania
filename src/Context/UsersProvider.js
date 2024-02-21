import { json } from "react-router-dom";
import { UsersContext } from "./UsersContext";
import { useState, useContext, useEffect } from "react";
export default function UsersProvider(props) {
  const [usersData, setUsersData] = useState([]);
  const [currentUser,setCurrentUser]=useState(null);
  const newUserHandler = (user) => {
    if (isUsed(user)) {
      alert("already used");
    } else {
      setUsersData([...usersData, user]);
      setCurrentUser(user);
    }
  };
  const currentUserHandler=(user)=>{
    const e=isUsed(user);
    if(e){
      if(e.password===user.password){
        setCurrentUser(user);
      }else{
        alert("password is wrong");
      }
    }else{
      alert("sign Up first");
    }
  }
  const currentUserOut=()=>{
    setCurrentUser(null);
    window.location.reload();
  }
  const deleteCurrentUser=()=>{
    setUsersData(
      usersData.filter((user)=>{
        return user.email!== currentUser.email;
      })
    );
    currentUserOut();
  }
  const deleteSelectedUser=(selectedUser)=>{
    setUsersData(
      usersData.filter((user)=>{
        return user.email!== selectedUser.email;
      })
    );
    if(selectedUser.email===currentUser?.email){
      currentUserOut();
    }
  }
  const updateEmail=(user)=>{
    let input=prompt("enter new email : ");
    if(currentUser?.email===user.email){
      user.email=input.split('@').length<=1?`${input}@gmail.com`:input;
      setCurrentUser(user)
    }else{
      user.email=input.split('@').length<=1?`${input}@gmail.com`:input;
    }
    const temp=usersData;
    setUsersData([]);
    setUsersData([...temp]);
  }
  const updatePassword=(user)=>{
    let input=prompt("enter new password : ");
    if(input.length<8){
      alert("password should be more than 8 chars");
    }else{
      if(currentUser?.email===user.email){
        user.password=input;
        currentUserOut();
      }else{
        user.password=input;
      }
      const temp=usersData;
      setUsersData([]);
      setUsersData([...temp]);
    }
    }
  const isUsed = (user) => {
    for (let i of usersData) {
      if (i.email === user.email) {
        return i;
      }
    }
    return false;
  };
  useEffect(()=>{
    const storedUsers=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
    const storedCurrentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null;
    setUsersData(storedUsers);
    setCurrentUser(storedCurrentUser);
  },[]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(usersData));
  }, [usersData]);
  useEffect(()=>{
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
  },[currentUser]);
  let myValues = {
    usersData,
    newUserHandler,
    currentUser,
    currentUserHandler,
    currentUserOut,
    deleteCurrentUser,
    deleteSelectedUser,
    updateEmail,
    updatePassword
  };
  return (
    <UsersContext.Provider value={myValues}>
      {props.children}
    </UsersContext.Provider>
  );
}
