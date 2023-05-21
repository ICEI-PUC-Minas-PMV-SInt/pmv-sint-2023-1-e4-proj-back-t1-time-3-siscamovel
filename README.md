# SISCAMOVEL API #
SISCAMOVEL API é um gerenciador de dados responsável pelo cadastro, alteração, consulta e exclusão de veículos e pessoas administradoras de sistema.
Não possui qualquer tipo de autorização / autenticação implementada (OAuth). Construída com ASP.NET Core 7. Feita apenas para fins educacionais.

Requisitos:
- [Visual Studio Community](https://visualstudio.microsoft.com/pt-br/vs/community/) ou [Rider](https://www.jetbrains.com/pt-br/rider/)
- [MariaDB](https://www.tutorialspoint.com/mariadb/mariadb_installation.htm)
- [DBeaver](https://dbeaver.io/download/)

### Download ###

```bash

# Download do repositorio
$ cd Development
$ git clone https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-1-e4-proj-dist-t1-time4-siscamovel.git -b dev/api
```

### Execução ###

```bash
# Após estar com o MariaDB instalado e executando no dispositivo, abrir o projeto na IDE desejada pelo terminal e executar:
 $ dotnet ef database update
 ```
Pronto! Agora é so executar o projeto que a IDE vai baixar as dependências :)
