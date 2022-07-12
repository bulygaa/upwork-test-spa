import { UserContext } from "context/User"
import { useContext } from "react"

export const useUserContext = () => {
    return useContext(UserContext)
}