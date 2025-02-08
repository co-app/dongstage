swag:
	cd server && swag fmt && swag init

server-run:
	cd server && docker build -t server . && docker run -d -p 8080:8080 server

up: 	
	docker-compose up --build -d

down:
	docker-compose down