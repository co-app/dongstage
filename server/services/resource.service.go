package services

import (
	"log"

	"github.com/zkfmapf123/dongstage/base"
	"github.com/zkfmapf123/dongstage/repositories"
)

func GetResource() ([]base.ResourceParams, error) {

	r := repositories.NewResource()
	data, err := r.GetResource()
	if err != nil {
		log.Println(err)
		return nil, err
	}

	return data, nil
}