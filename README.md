

k8s
```
kubectl delete deployment front-fff -n fnc-fff

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```


docker
```
docker build -t fncdev/front-fff:dev .
docker build --no-cache -t fncdev/front-fff:dev .
docker push fncdev/front-fff:dev

docker rm $(docker ps -a -q)
docker rmi $(docker images -f "dangling=true" -q)
```
