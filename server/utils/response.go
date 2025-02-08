package utils

import (
	"github.com/gofiber/fiber/v2"
)

type ResponseParams[T any] struct {
	Result T `json:"result"`
	Err string `json:"err"`
}

func ServerResponse[T any](c *fiber.Ctx, v T, err error) error {
	if err != nil {
		return c.JSON(ResponseParams[T]{
			Result: v,
			Err: err.Error(),
		})	
	}

	return c.JSON(ResponseParams[T]{
		Result: v,
		Err: "",
	})	
}