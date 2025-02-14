# Arquitetura da Solução

O diagrama a seguir ilustra o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado a tela inicial
(Tela 1) onde ele é confrontado com as opções de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

## Diagrama da Solução

![SISCAMOVEL User Flow](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-time4-siscamovel/raw/main/img/siscamovel-userflow.jpg)


## Diagrama de Contexto

![SISCAMOVEL DIAG CONTEXT](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-time4-siscamovel/raw/main/img/diagrama-contexto.png)


## Diagrama de Container

![SISCAMOVEL DIAG CONTAINER](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-time4-siscamovel/raw/main/img/diagrama-container.png)

## Tecnologias Utilizadas

A nossa aplicação web será estruturada em ASP.NET Core API e Angular, onde buscamos atender as demandas de nosso público alvo.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


## Hospedagem

O produto será hospedado na plataforma em nuvem Azure.

> **Links Úteis**:
>
> - [GitHub Actions](https://docs.github.com/en/actions/)
> - [Getting Started with Azure](https://azure.microsoft.com/en-us/get-started/)
