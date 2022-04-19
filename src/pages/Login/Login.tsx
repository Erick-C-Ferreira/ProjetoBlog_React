import React, { useState, useEffect, ChangeEvent, } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../service/Service';
import UserLogin from '../../model/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {

    let history = useHistory(); // redireciona o usuário para determianda pagina
    const dispatch = useDispatch()
    const [token, setToken] = useState(''); // hooks que vão manipular o nosso Local Stotage para gravar o token no armazenamento local.


    dispatch(addToken(token))

    const [userLogin, setUserLogin] = useState<UserLogin>({ //useState define como uma determinad variavel será inicializada quando o Comp.. for renderizado
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) { // função que junto com a setUserLogin irá atualizar o valor inicial da userLogin
        setUserLogin({
            ...userLogin, // Spread Operator(...) chama os componentes do userLogin "id, nome, usuario,senha,foto,token"
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => { // executa uma ação sempre que uma variavel seja mudada e dentro dele é executado uma ação ou função
        if (token != '') {
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token]) // variavel que define a mudança de estado das chaves acima e redireciona para a /home

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Usuário logado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usúario incosistententes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' color='black' className='lg1'> 
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textSecondary' component='h3' align='center' className='textos1'>Login</Typography>

                        <TextField
                            value={userLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { updatedModel(e) }}
                            id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth placeholder='example@email.com'/>

                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { updatedModel(e) }}
                            id='senha' label='Senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' />

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='inherit'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'> Não tem uma conta?</Typography>
                        </Box>

                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>

                </Box>
            </Grid>
            <Grid xs={6} className='img'>               

            </Grid>
        </Grid>
    );
}

export default Login;