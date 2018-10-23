# Angular Lab

This repository contains my studies and experiments of Angular development.

### Development Environment

To manage my development environment I use [docker-compose](https://docs.docker.com/compose).
See the my `Dockerfile` and `docker-compose.yml` in `.docker` folder.

To initialize the development environment run `start-dev-env.sh` shell script into 
`angular-lab` folder.

```
~/.../angular-lab$ sh start-dev-env.sh
```

That will create a docker container with a volume mapping the current folder 
(`~/.../angular-lab`) to `/angular-lab` folder in the container.

```
/angular-lab # 
```
