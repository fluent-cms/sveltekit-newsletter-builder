Server="4.7.168.193"
npm run build
rsync -av --progress build/ $Server:~/sveltekit-mui/
ssh $Server 'sudo rsync -av --progress ~/sveltekit-mui/ /opt/sveltekit'


