@ECHO OFF
pushd %~dp0
npm install && npm run start
popd
pause