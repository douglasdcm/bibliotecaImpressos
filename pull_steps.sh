cd /home/douglas/dcs/gcs/biblioteca_impressos
git pull https://github.com/douglasdcm/douglasdcm.github.io.git
git add --all
git status
echo Enter commit message: 
read m
git commit -m $m
git push https://github.com/douglasdcm/douglasdcm.github.io.git
git status
