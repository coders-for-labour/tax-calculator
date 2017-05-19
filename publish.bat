@echo off
call ng build --prod
echo calculate.forlabour.com > dist/CNAME
call ngh