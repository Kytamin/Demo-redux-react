import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"
function User() {
    let [form, setForm] = useState({ name: "", email: "", password: "" })
    let [users, setUser] = useState([])
    let [invalidEmail, setInvalidEmail] = useState(false)
    let [invalidPassword, setInvalidPassword] = useState(false)
    let [invalidName, setInvalidName] = useState(false)

    const handleChange = (e) => {
        if (e.target.name == 'email') {
            let email = e.target.value
            let password = e.target.value
            let patternEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            let patternPassword = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
            !patternEmail.test(email) ? setInvalidEmail(true) : setInvalidEmail(false)
            !patternPassword.test(password) ? setInvalidPassword(true) : setInvalidPassword(false)

        }
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        const indexItem = users.findIndex(item => item.name == form.name);
        if (indexItem == -1) {
            setUser([...users, form])
            setForm({ name: "", email: "", password: "" })
        } else {
            users[indexItem] = form;
            setUser([...users])
        }
    }
    const deleteUser = (name) => {
        window.confirm("do u want to delete")
        setUser(users.filter(element => element.name !== name))
    }
    const handleEdit = (index) => {
        let currentUser = users[index]
        setForm(currentUser)
    }

    return (
        <>
            <h1>User</h1>
            Name:
            <input type="text" value={form.name} onChange={handleChange} name="name" /><br />
            Email:
            <input type="email" value={form.email} onChange={handleChange} name="email" /><br />
            {invalidEmail && <p style={{ color: 'red' }}>Email invalid</p>}
            Password
            <input type="password" value={form.password} onChange={handleChange} name="password" /><br />
            {invalidPassword && <p style={{ color: 'red' }}>Password invalid</p>}
            <button onClick={handleSubmit} >Add</button>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (<tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td><button onClick={() => { deleteUser(user.name) }}>Delete</button></td>
                        <td><button onClick={() => { handleEdit(index) }}>Edit</button></td>
                    </tr>
                    )
                    )}
                </tbody>
            </table>
        </>
    )
}

export default User