# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

<table>
<thead>
  <tr>
    <th>NOME/DESCRIÇÃO</th>
    <th>COMPORTAMENTO</th>
    <th>INCONVENIÊNCIAS</th>
    <th>OBJETIVOS</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Marina Diamante, 32 anos. Cantora internacional de pop e rock que gosta de admirar a paisagem e conhecer culturas diversas em diversos cantos do mundo quando não está em turnê.</td>
    <td>Adora passar longas horas viajando de carro, porém se preocupa com o impacto que as viagens causam a natureza devido ao alto uso de combustíveis. Procura na internet informações de veículos elétricos com alta eficiência energética.</td>
    <td>A preocupação da cliente é que existem diversos modelos de carro elétrico com fabricantes diferentes, porém não há praticidade para compará-los.</td>
    <td>Pesquisar um modelo de carro elétrico para que a pessoa viaje com segurança, conforto, estilo, com o mínimo de impacto possível a natureza e que a bateria do veículo proporcione máxima eficiência energética.</td>
  </tr>
  <tr>
    <td>Ariana Pantone, 29 anos. UX Designer. DJ e aspirante a publicitária nas horas vagas.
</td>
    <td>Gosta de animais e adora estudar ciências sociais para desmistificar o senso comum. Tem como hobby conhecer a cultura local nas diversas cidades do seu país.
</td>
    <td>Não encontrar uma plataforma com interface agradável e fácil de usar.</td>
    <td>Obter informações sem perder muito tempo e que se tenha vontade de voltar ao site.</td>
  </tr>
  <tr>
    <td>Lucas Fresta, 26 anos. Professor de História na UFMG. É desenvolvedor embarcado freelancer nas horas vagas.
</td>
    <td>Para Lucas, viajar nas férias é uma necessidade para explorar os lugares culturais que não conhece e aproveitar a culinária do local onde se está.
</td>
    <td>Por não ter conhecimento em automóveis, quer ter acesso a uma plataforma em que possa obter informações confiáveis para ter sua decisão final de compra.
</td>
    <td>Quer um carro durável, resistente, confortável e com desempenho energético eficaz.</td>
  </tr>
</tbody>
</table>



## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Cliente             | Comparar os componentes dos carros | Possibilitar a seleção do veículo que atenda melhor as minhas expectativas |
|Administrador       | Cadastrar carro                    | Disponibilizar as informações coletadas através de uma pesquisa para atender o público. |
|Administrador       | Editar cadastro do carro           | Editar as informações com dados mais recentes dos veículos |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito | Dificuldade (B/M/A)* | Prioridade (B/M/A)* |
|------|-----------------------------------------|----|----|
|RF-001| O sistema deve permitir cadastrar, alterar e excluir informações sobre veículos elétricos   | MÉDIA | MÉDIA |
|RF-002| O sistema deve permitir comparar todos os recursos e funções dos veículos   | ALTA | ALTA |
|RF-003| O sistema deve permitir o cadastro e a exclusão de usuários | ALTA | ALTA |
|RF-004| O sistema deve permitir ter AdminID para administradores do sistema | ALTA | ALTA |
|RF-005| O sistema deve permitir que o usuário faça interação para buscar veículo por meio de mock na página inicial do projeto | MÉDIA | MÉDIA |

*B=Baixa, M=Média, A=Alta.


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em dispositivos móveis | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve rodar em diversos tipos de navegadores |  ALTA | 
|RNF-004| O sistema deve ser intuitivo e de fácil compreensão ao usuário |  MÉDIA | 
|RNF-005| O sistema deve ficar no ar 24h |  MÉDIA | 
|RNF-006| Para fins educacionais, a API deve apresentar os dados cadastrados publicamente e sem nenhum tipo de autenticação / autorização |  ALTA | 
|RNF-007| O sistema deve ter certificação de segurança | ALTA | 
|RNF-008| O sistema deve usar MariaDB para salvar dados |  MÉDIA | 
|RNF-009| O sistema deve respeitar as boas práticas de acessibilidade | MÉDIA


## Restrições Arquiteturais

O projeto está restrito pelos itens apresentados na tabela a seguir.

|RNUM| Descrição                                          |
|--|-------------------------------------------------------|
|**R1**| O front end deve ser desenvolvido com a linguagem TypeScript e para isso deve ser utilizado o framework Angular na versão mais recente. |
|**R2**| Para a construção e padronização de interface do usuário, deve ser utilizado o framework Bootstrap como um facilitador do guia de estilo, uso de media queries e sistema de grid para responsividade em diversos aparelhos. |
|**R3**| Como forma de transporte de informações deve ser utilizado o formato JSON. |
|**R4**| O sistema deverá ter um microsserviço para armazenamento de dados (cadastro e informações do veículo). |
|**R5**| O sistema deve ser construído de forma modular para facilitar a implantação. |
|**R6**| Os módulos do sistema que compõem os microsserviços do backend devem ser construídos na linguagem C# com o framework .NET Core em sua última versão para execução do lado do servidor. |
|**R7**| A plataforma de comunicação em nuvem Azure deverá ser utilizada para o gerenciamento dos serviços. |
|**R8**| Deverá ser utilizado o MariaDB para armazenamento de dados. |


## Mecanismos Arquiteturais
|Análise     | Design  |Implementação |
|-------|-------------------------|----|
|Persistência | Banco de dados relacional | MariaDB |
|Persistência | Framework ORM | Entity Framework |
|Front end | Framework de desenvolvimento | Angular |
|Front end | Linguagem de programação | Typescript |
|Front end | Framework de folha de estilos | Bootstrap |
|Deploy | Plataforma de automatização de deploy | Azure |
|Back end | Linguagem de programação | C# |
|Back end | Framework Server-Side Web | ASP.NET Core |
|Back end | Ambiente de execução | .NET |
|Back end | Serviço de execução de código | Azure App Service |
|Back end | Gerenciador de trafego | Azure App Service |
|Autenticação | Serviço de autenticação | Azure Active Directory |
|Integração | Formato de transporte de informações | JSON |
|Integração | Protocolo de comunicação | HTTP |
|Integração | Estilo de arquitetura | REST |
|Versionamento | Controle e armazenamento de código fonte | Github |
|Versionamento | Versionamento de código fonte | Git |
|Automação | Ferramenta de workflow | Github Actions |
|Build | Ferramenta de build de componentes do software | NPM, NuGet |
|Folha de estilos | Linguagem de folha de estilos | CSS |


## Modelagem e Projeto Arquitetural
### APIs projetadas

01 - Gerenciamento de dados de veículos elétricos (CRUD)
| HTTP Verb | Endpoint | Ação |
|---------|---------|------|
| GET | /siscm/v1/Veiculos | Obtenha todos os veículos cadastrados |
| POST | /siscm/v1/Veiculos | Cadastre um novo veículo |
| GET | /siscm/v1/Veiculos/{id} | Obtenha um veículo específico |
| PUT | /siscm/v1/Veiculos/{id} | Atualize um veículo específico (somente Admin) |
| DELETE | /siscm/v1/Veiculos/{id} | Exclui um veículo específico (somente Admin) |


02 - Gerenciamento de dados de admins (CRUD)
| HTTP Verb | Endpoint | Ação |
|---------|---------|------|
| GET | /siscm/v1/Admins | Obtenha todos admins cadastrados |
| POST | /siscm/v1/Admins | Cadastre novo admin |
| GET | /siscm/v1/Admins{id} | Obtenha dados de admin específico |
| PUT | /siscm/v1/Admins{id} | Atualize dados de admin específico |
| DELETE | /siscm/v1/Admins{id} | Exclui dados de admin específico |


### Diagramas
Ver <a href="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-time4-siscamovel/blob/main/docs/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.md"> Arquitetura da Solução</a>.


### Descrição / Abordagem de ferramentas de testes
Ver <a href="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-time4-siscamovel/blob/main/docs/09-Registro%20de%20Testes%20de%20Software.md"> Registro de Testes de Software</a>.