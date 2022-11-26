import { Routes, Route } from 'react-router-dom';


const AuthView = () => {
    return (
        <div>
            <Routes>
                <Route path='singin' element={ <h2> Login </h2> }/>
                <Route path='singup' element={ <h2> Register </h2> }/>
            </Routes>
        </div>
        
    )
}

export default AuthView;