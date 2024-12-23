import './Login.css';
import { useEffect, useState } from 'react';

const Login = (props)=>{
    const {estado} = props;
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const url = 'https://borras25.netlify.app/.netlify/functions/getData'; // Asegúrate de que esta URL sea correcta
    
        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setUsuarios(data))
        .catch(error => console.error('Error fetching data:', error));
    }, [estado]);

    const manejoSubmit =(e)=>{
        let inp_usuario = document.querySelector("#inp_usuario").value;
        let inp_passw = document.querySelector("#inp_passw").value;
        e.preventDefault();
        usuarios.map(user=>{
            if(user.usuario === inp_usuario && user.passw === inp_passw){
                console.log("ES HORA DE ENTRENAR, ",user.usuario)
            }
        })
        console.log(usuarios)
    }

    return <>
        <div className="login-container"> 
            <h2>Iniciar Sesión</h2> 
            <form onSubmit={manejoSubmit}> 
                <input id='inp_usuario' type="text" name="username" placeholder="Nombre de usuario" required /> 
                <input id='inp_passw' type="password" name="password" placeholder="Contraseña" required /> 
                <button type="submit">Iniciar Sesión</button> 
            </form> 
        </div>
    </>
}

export default Login;