import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(propriedades){
  return(
    <Box as="aside">
      <img src={`http://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
      <hr></hr>

      <a className="boxLink" href={'http://github.com/${propriedades.githubUser}'}>
        @{propriedades.githubUser}
      </a>

      <hr></hr>

      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

function ProfileRelationsBox(propriedades){
  return(
    <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              {propriedades.title} ({propriedades.itens.length})
            </h2>
            {/* <ul>
                {seguidores.map((itemAtual) => {
                  return (
                    <li key={itemAtual}>
                      <a href={`http://github.com/${itemAtual}.png`}>
                        <img src={itemAtual.image} />
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                  )
                })}
            </ul> */}
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  
  const usuarioAleatorio = 'mathvra'
  const [comunidades, setComunidades] = React.useState([{
    id: '23123123123123123',
    title: 'Eu odeio acordar cedo',
    image: 'http://alurakut.vercel.app/capa-comunidade-01.jpg'
  }])
  const pessoasFavoritas = [
    'srgesio', 
    'arielwsc', 
    'lu4nsds', 
    'peas', 
    'juunegreiros', 
    'omariosouto'
  ]

  const [seguidores, setSeguidores] = React.useState([])
  React.useEffect(function(){
    fetch('http://api.github.com/users/peas/followers')
    .then(function (respostaDoServidor){
      return respostaDoServidor.json()
    })
    .then(function (respostaCompleta){
      setSeguidores(respostaCompleta)
    })
  }, [])

  return (
    <>
    <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e){
              e.preventDefault()
              const dadosDoForm = new FormData(e.target)

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')
              }
              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          
          <ProfileRelationsBox titulo="Seguidores" itens={seguidores} />

          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
                {comunidades.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id}>
                      <a href={`/users/${itemAtual.title}`}>
                        <img src={itemAtual.image} />
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
