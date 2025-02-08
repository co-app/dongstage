package repositories

import (
	"encoding/json"
	"os"

	"github.com/zkfmapf123/dongstage/base"
)

type ResourceParams struct {

}

func NewResource() *ResourceParams {
	return &ResourceParams{}
}

// 일단 개발이라 mock data로 처리
func (r *ResourceParams) GetResource() ([]base.ResourceParams, error) {
	data, err := os.ReadFile("mock/mock.json")
	if err != nil {
		panic(err)
	}

	var res []base.ResourceParams
	
	err= json.Unmarshal(data, &res)
	if err != nil {
		return res, err
	}

	return res, nil
}
