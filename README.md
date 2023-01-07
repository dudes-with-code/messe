# Setup this App


>## db setup
>
>- install docker
>- run ./install.sh

>## run program
>
>- npm run dev

>## create new docker image version
>- sudo docker build -t messeapp-docker --build-arg NEXT_PUBLIC_CLIENTVAR=clientvar .
>- docker save messeapp-docker | gzip | pv | ssh marc@schmitz.tools docker load
>- relaunch docker-compose