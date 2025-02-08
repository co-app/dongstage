package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/zkfmapf123/dongstage/base"
	"github.com/zkfmapf123/dongstage/services"
	"github.com/zkfmapf123/dongstage/utils"
)

type GetResourceParams struct {
	TableHeader map[string]base.IdxAttr `json:"table_header"`
	Data []base.ResourceParams `json:"data"`
}

// GetHandlers godoc
//
//	@summary		Get Resources
//	@description	Get Resources
//	@accept			json
//	@success		200	{object}	handlers.GetResourceParams
//	@router			/api/resource [get]
func GetResource(c *fiber.Ctx) error {
	data, err := services.GetResource()

	params := GetResourceParams{
		TableHeader: base.TableHeaderIdx,
		Data: data,
	}

	return utils.ServerResponse(c, params, err)
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