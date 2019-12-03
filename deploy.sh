#!/usr/bin/env sh

set -e

npm run build:prod

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lost-dream/front-end-demo.git master

git rm --cached dist

cd -