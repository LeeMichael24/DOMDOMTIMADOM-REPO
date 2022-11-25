import { Routes, Route } from 'react-router-dom';


const AuthView = () => {
    return (
        <Routes>
            <Route path='singin' element={ <h2> Login </h2> }/>
            <Route path='singup' element={ <h2> Register </h2> }/>
        </Routes>
    )
}

export default AuthView;