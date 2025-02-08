package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/swagger"
	_ "github.com/zkfmapf123/dongstage/docs"
	"github.com/zkfmapf123/dongstage/handlers"
)

var (
	PORT = os.Getenv("PORT")
	PREFIX = os.Getenv("PREFIX")
)

func main() {
	app := fiber.New()

	r := app.Group(PREFIX)

	r.Get("/ping", handlers.Ping)
	r.Get("/resource",handlers.GetResource)

	// swagger는 나중에 추가하실 때 관련 패키지를 설치 후 주석 해제하세요
	app.Get("/swagger/*", swagger.HandlerDefault)

	log.Fatal(app.Listen(fmt.Sprintf(":%s", PORT)))

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)

	<-c
	log.Println("Shutting down server...")
	app.Shutdown()
}

