npm run docs:build
cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'
git push -f git@github.com:flower-string/flower-string.github.io.git master