import { Root } from "../Components/Root"
import { Login } from "../Components/Login"
import { Center } from "../Components/Center"

export const LoginPage = ({ children }) => {
    return (
        <Root>
            <Center viewport>
                <Login />
            </Center>
        </Root>
    )
}