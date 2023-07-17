import { useSelector } from "react-redux";

function Home() {
    const users = useSelector(state => state.user.users)

    return (
        <h1>Home Page: {users.length}</h1>
    );
}
export default Home;