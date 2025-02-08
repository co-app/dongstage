package base

type TagParams struct {
	Key string `json:"key"`
	Value string `json:"value"`
}

type LinkAttrParams struct {
	Index int `json:"index"`
	Link string `json:"link"`
	LinkImoji string `json:"link_emoji"`
	LinkText string `json:"link_text"`
}

type StatusAttrParams struct {
	Status string `json:"status"` 				 // 상태 (pending, running, stopped)
	StatusColor string `json:"status_color"` 	 // 상태 색태 (yellow, green, red)
}

type ResourceParams struct {
	Id string `json:"id"` 			 			 // id
	Name string `json:"name"` 	 	 			 // 이름
	Vendor string `json:"vendor"` 	 			 // 제조사
	System string `json:"system"` 	 			 // 시스템
	Engine string `json:"engine"` 	 			 // 엔진
	Revision string `json:"revision"` 		 	 // 버전
	Team string `json:"team"`					 // Team
	Environment string `json:"environment"` 	 // 환경
	Status StatusAttrParams `json:"status"` 	 // 상태 (pending, running, stopped)
	Description string `json:"description"` 	 // 설명
	Tags []TagParams `json:"tags"`			     // 태그	
	LinkAttr []LinkAttrParams `json:"link_attr"` // 링크 속성
}