echo off

echo[
echo Checking for github-pages update
call bundle update github-pages

echo[
echo Installing Gems
call bundle install

echo[
echo Building and Serving
call bundle exec jekyll serve -w -o