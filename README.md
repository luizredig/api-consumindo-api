### NETWORK
```bash
docker network create apis-network
```

### API IBGE
```bash
docker build -t api-ibge .
docker run -d --name api-ibge \
  --network apis-network \
  -p 3000:3000 \
  api-ibge
```

### API GOVERNO
```bash
docker build -t api-governo .
docker run -d --name api-governo \
  --network apis-network \
  -p 3001:3001 \
  api-governo
```
