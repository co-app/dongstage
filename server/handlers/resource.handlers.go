package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/zkfmapf123/dongstage/services"
	"github.com/zkfmapf123/dongstage/utils"
)

// GetHandlers godoc
//
//	@summary		Get Resources
//	@description	Get Resources
//	@accept			json
//	@success		200	{object}	utils.ResponseParams[[]base.ResourceParams]
//	@router			/api/resource [get]
func GetResource(c *fiber.Ctx) error {
	data, err := services.GetResource()
	return utils.ServerResponse(c, data, err)
}

// func GetResourceById(c *fiber.Ctx) error {

// }

// func GetResourceByVendor(c *fiber.Ctx) error {

// }

// func GetResourceByTeam(c *fiber.Ctx) error {

// }

// func GetResourceByEnvironment(c *fiber.Ctx) error {

// }

// func GetResourceByStatus(c *fiber.Ctx) error {

// }