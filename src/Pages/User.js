import MyForm from "../Components/Form/MyForm";
import { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";
import UserProfile from "../Components/UserProfile/UserProfile";
export default function User() {
    const {currentUser}=useContext(UsersContext)
  return (
    <>
    {
      currentUser==null?<MyForm></MyForm>:<UserProfile></UserProfile>
    }
    </>
  );
}
