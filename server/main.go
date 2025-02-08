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

	app.Get("/swagger/*", swagger.HandlerDefault)

	log.Fatal(app.Listen(fmt.Sprintf(":%s", PORT)))

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)

	<-c
	log.Println("Shutting down server...")
	app.Shutdown()
}

