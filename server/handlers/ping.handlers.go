package handlers

import "github.com/gofiber/fiber/v2"

type PingResponse struct {
	Msg string `json:"msg"`
}

// PingHandlers godoc
//
//	@summary		Send ping
//	@description	ping
//	@accept			json
//	@success		200	{object}	handlers.PingResponse
//	@router			/api/ping [get]
func Ping(c *fiber.Ctx) error {
	return c.JSON(PingResponse{
		Msg: "hello world",
	})
}
