# Sistema de notificação em NodeJs

## Descrição

Microsserviço de notificações desenvolvido no Ignite Lab de Node.js

## Setup

Instale o [docker](https://docs.docker.com/engine/install/) e o [docker-compose](https://docs.docker.com/compose/install/).

Copie o arquivo `env-example` para o `.env` e adicione valores válidos para as variáveis de ambientes.

## Rodando o app

### Desenvolvimento

#### Usando docker-compose direto

Caso tenha modificado algo no arquivo `Dockerfile` ou seja a primeira vez, rode o comando de build:

```bash
$ docker-compose build
```

E agora rode a aplicação:

```bash
$ docker-compose up -d web
```

#### Usando Makefile

```bash
$ make build-and-run
```

Após já ter feito o build, caso queira rodar somente a aplicação:


```bash
$ make run
```

## License

Notification-Service é [MIT licensed](LICENSE).
