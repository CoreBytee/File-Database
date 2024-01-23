import { Root } from "../Components/Root"
import { Login } from "../Components/Login"
import { Center } from "../Components/Center"

export default function LoginPage({ children }) {
    return (
        <Root>
            <Center viewport>
                <Login />
            </Center>
        </Root>
    )
}