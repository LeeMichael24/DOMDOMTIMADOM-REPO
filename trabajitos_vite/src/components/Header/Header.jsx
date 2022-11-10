import classes from "./Header.module.scss";
import logoReact from '../../assets/images/React.png';
import logoLogin from '../../assets/images/Logo-login.png';
import { GoogleLogin } from '@react-oauth/google';


const Header = () => {



    return (
        <header className={classes['Header']}>
            <nav className={classes['nav']}>
                <div className={classes["nav-container-home"]}>
                    <figure>
                        <button className={classes['button-home-login']}><img width="50px" src={logoReact} /></button>
                    </figure>
                </div>
                <div className={classes["nav-container-bar"]}>
                    <input className={classes['search-bar']} type="text" placeholder="  Busca la categoria que necesitas..." />
                </div>
                <div className={classes["nav-container-public"]}>
                    <button className={classes['button-public']}> Publicar </button>
                </div>
                <div className={classes["nav-container-login"]}>
                    <figure>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;
                    </figure>
                </div>
            </nav>
        </header>
    )
}


export default Header;

