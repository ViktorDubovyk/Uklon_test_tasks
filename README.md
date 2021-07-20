# Uklon_test_task5
- Инсталяция Minikube: инсталяцию docker не прилагаю так ка была выполнена для предыдущих заданий

`curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
  && chmod +x minikube`

`sudo install minikube /usr/local/bin/`

`minikube start --vm-driver=docker --nodes=2` – запуск minikube с драйвером docker, запускаем 2 nodes

- Инсталяция NGINX Ingress Controller

`minikube addons enable ingress`

- `kubectl create deployment node-app --image=vets/test_uklon:latest` создал deployment который использует образ node.js приложения
[мой Docker образ](https://hub.docker.com/repository/docker/vets/test_uklon)

- kubectl expose `deployment node-app --type=NodePort --port=3000` - создал сервис который указывает на порт приложения
- Создал и применил ingress ресурс
`kubectl apply -f ingress-node-app.yaml` 



- `kubectl scale deploy node-app --replicas=3` – масштабировал количество реплик до 3
- Выполнил проверку в браузере по адресу http://node-app.io:80, убедился что запросы алгоритма перебора поочередна попадают в pods с node.js приложением  

