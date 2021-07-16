import React from 'react'
//Hook do NextJS
import { useRouter } from 'next/router'
import nookies from 'nookies'

export default function LoginScreen() {

    const router = useRouter()
    const [githubUser, setGithubUser] = React.useState('mathvra')

    return (
        <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <div className="loginScreen">
            <section className="logoArea">
            <img src="https://alurakut.vercel.app/logo.svg" />

            <p style={{color: "white"}}><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
            <p style={{color: "white"}}><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
            <p style={{color: "white"}}><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
            </section>

            <section className="formArea">
            <form className="box" onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault()
                
                fetch('https://alurakut.vercel.app/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({githubUser: githubUser})
                })
                .then( async (respostaDoServidor) => {
                    const dadosDaResposta = await respostaDoServidor.json()
                    const token = dadosDaResposta.token
                    nookies.set(null,'USER_TOKEN', token, {
                        path: '/',
                        maxAge: 86400 * 7
                    })
                    router.push('/')
                })
            }}>
            <p style={{color: "white"}}>
                Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </p>
            <input 
                placeholder="Usuário" 
                value={githubUser}
                onChange={(evento) => {
                    setGithubUser(evento.target.value)
                }}
            />
            <button type="submit">
                Login
            </button>
            </form>

            <footer className="box">
                <p style={{color: "white"}}>
                Ainda não é membro? <br />
                <a href="/login">
                    <strong>
                    ENTRAR JÁ
                </strong>
                </a>
                </p>
            </footer>
            </section>

            <footer className="footerArea">
            <p style={{color: "white"}}>
                © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
            </p>
            </footer>
        </div>
        </main>
    )
} 