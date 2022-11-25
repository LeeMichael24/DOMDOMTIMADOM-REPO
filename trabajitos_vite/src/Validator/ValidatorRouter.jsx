import { Navigate, Outlet } from "react-router-dom"


export const ValidatorRouter = ({ user, children, redirectTo='/' }) => {
    if (!user){
        return <Navigate to={redirectTo} />
    }

    return  children
}