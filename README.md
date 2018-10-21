# Angular Lab

This repository contains my studies and experiments of Angular development.

### Development Environment

To manage my development environment I use [docker-compose](https://docs.docker.com/compose) 
and [direnv](https://github.com/direnv/direnv). To use it you should have installed 
`docker-compose` and `direnv` dependencies. Besides, you should create `export_alias` 
function in `~/.direnvrc` as following:

``` sh
# https://github.com/direnv/direnv/issues/73#issuecomment-174295790
export_alias() {
  local name=$1
  shift
  local alias_dir=$PWD/.direnv/aliases
  local target="$alias_dir/$name"
  mkdir -p "$alias_dir"
  PATH_add "$alias_dir"
  echo "#!/usr/bin/env bash -e" > "$target"
  echo "$@" >> "$target"
  chmod +x "$target"
}
```

