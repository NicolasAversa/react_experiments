Remove-Item package-lock.json 
Remove-Item .eslintrc.json
Remove-Item node_modules -Recurse
npm install
npx eslint --init