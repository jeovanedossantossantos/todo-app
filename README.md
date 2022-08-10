# Projeto todo-app

Projeto criado no modulo de fullstack do curos de react e redux.
Aplicação consiste em criar um banco de dados em monodb, uma api node-rest-ful e um fontend em React. 

# Banco de dados

Essa aplicação possui um banco de dados em nuvem, isso foi possivel com conhecimetos além do que o curso 
oferecia, esse conhecimento foi de ter abilidade com o Mongo Atlas.

O Mongo Atlas, permite que posso ser criado apenas um banco de dados de forma gratuida e sem a necessidade de
colocar cartão. 

<a href="https://cloud.mongodb.com/">Link para mais informações<a/>

# Api node-rest-ful

A escolha desse formato do curos foi pela facilidade e rapidez para criação da aplicação, já que é uma api bem basica.
Essa aplicação está hospedad na vercel, tabém foi hopedada graças a conhecimentos fora do curso, pois foi oreciso fazer
algumas configuçãoes extras.

Configução essa que deve ser criada na raiz do projeto com o seguinte nome vercel.json e dentro dele deve se colocar as seguintes linhas.

        {
        "version": 2,
        "builds": [
          {
            "src" : "index.js",
            "use" : "@vercel/node"
          }
        ],
        "routes": [
          {
            "src" : "/(.*)",
            "dest" : "/"
          }
        ]
      }
      

Atenção: quando for fazer o deploy, verfique a versão do nodeJS usada em seu projeto, isso pode ser vista no package.json de sua aplicação ou
no seu terminar digitando npm --version ou yarn -v.
Isso é importande saber pois na configuração do deploy no vercel é necessario escolher a versão do node usada, caso seja uma versão diferente 
o app não funconara.

# Frontend todo-app

Aplicação feita em ReactJs, como o uso do boostrap.
Uma aplicação basica apeans para praticar o conceito e as praticas de conexões com uma api.

<a href="https://todo-app-frontend-react.vercel.app/#/todos">Experimente a aplicação</a>
