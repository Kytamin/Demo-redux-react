import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import { useDispatch, useSelector } from "react-redux";
import {remove, setAll} from "../../features/users/useSlice"

function ListUser() {
   
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(users);
        axios.get('https://api.github.com/users').then(res => {
            
            dispatch(setAll(res.data))
        })
    }, [])

    const findindex = (idUser) => {
        let i = -1
        users.forEach((user, index) => {
            if (user.id === idUser) {
                i = index
            }
        })
        return i
    }
    const deleteUser = (idUser) => {
        dispatch(remove(idUser))
    }

    
    return (
        <div>
            <table class="table">
                <thead>
                    <tr >
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {users  && users.map((element, index) => (
                        <tr>
                            <td>{element.login}</td>
                            <td>{element.type}</td>
                            <td class="col-1" ><input type="image" width={"100px"} src={element.avatar_url} class="img-fluid" /></td>
                            <td class="col-1" ><input type="button" value="Delete" onClick={() =>  deleteUser(element.id) } /></td>
                            <td class="col-1" ><input type="button" value="Update" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListUser