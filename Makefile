DOCKER_BASE_FILE=docker-compose.yml
# DOCKER_TEST_FILE=docker-compose-test.yml
DOCKER_PROD_FILE=docker-compose-prod.yml

stop:
	docker-compose -f $(DOCKER_BASE_FILE) stop;
# docker-compose -f $(DOCKER_BASE_FILE) -f $(DOCKER_PROD_FILE) -f $(DOCKER_TEST_FILE) stop;

build-dev: stop
	docker-compose -f $(DOCKER_BASE_FILE) build

build-and-run: build-dev
	docker-compose -f $(DOCKER_BASE_FILE) up -d

run:
	docker-compose -f $(DOCKER_BASE_FILE) up -d

build-prod: stop
	docker-compose -f $(DOCKER_BASE_FILE) -f $(DOCKER_PROD_FILE) build

prod: build-prod
	docker-compose -f $(DOCKER_BASE_FILE) -f $(DOCKER_PROD_FILE) up -d
