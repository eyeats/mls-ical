# MLS ical generator

## Running in Docker

## Build 

``` bash
docker build -t mls-ical .
```

## Run

``` bash
docker run --rm -d -p 3000:3000 --name mls-ical mls-ical
```

## Connect

Navigate to http://localhost:3000

## Stop

``` bash
docker stop mls-ical
```
