#!/bin/bash
NAME=${1:-$(basename "$PWD")}
rm -rf .git
git init -q && git add . && git commit -q -m "initial commit"
gh repo create "$NAME" --private --source=. --remote=origin --push
vercel --prod --yes
