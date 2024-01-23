import Root from "../Components/Root"
import Login from "../Components/Login"
import Center from "../Components/Center"

export default function LoginPage({ children, username }) {
    return (
        <Root>
            <Center viewport>
                <Login username={username} />
            </Center>
        </Root>
    )
}