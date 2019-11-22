#!/bin/sh
ng build --prod --base-href "https://calculate.forlabour.com"
echo calculate.forlabour.com > dist/CNAME
npx ngh