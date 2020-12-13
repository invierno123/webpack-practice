yarn build &&
git checkout gh-pages &&
rm -rf images &&
rm -rf *.html *.js *.css &&
mv dist/* ./ &&
git add . &&
git commit -m "updated" &&
git push &&
git checkout -
