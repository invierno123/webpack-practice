yarn build &&
git checkout gh-pages &&
rm -rf images &&
rm -rf *.html *.js *.css &&
mv dist/* ./ &&
rm -rf dist ;
git add . &&
git commit -m "updated1" &&
git push &&
git checkout -
