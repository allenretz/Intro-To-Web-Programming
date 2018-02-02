#!/bin/sh

git checkout master
git pull
git add .
git commit -am "website update"
git push
echo Press Enter...
