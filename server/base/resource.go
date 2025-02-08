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

type IdxAttr struct {
	Idx int `json:"idx"`
	Kor string `json:"kor"`
	Eng string `json:"eng"`
}

var TableHeaderIdx = map[string]IdxAttr{
	"id": {Idx: 0, Kor: "ID", Eng: "ID"},
	"name": {Idx: 1, Kor: "이름", Eng: "Name"},
	"vendor": {Idx: 2, Kor: "공급업체", Eng: "Vendor"},
	"system": {Idx: 3, Kor: "시스템 구성", Eng: "System"},
	"engine": {Idx: 4, Kor: "엔진", Eng: "Engine"},
	"revision": {Idx: 5, Kor: "버전", Eng: "Revision"},
	"team": {Idx: 6, Kor: "팀", Eng: "Team"},
	"environment": {Idx: 7, Kor: "환경", Eng: "Environment"},
	"status": {Idx: 8, Kor: "상태", Eng: "Status"},
	"description": {Idx: 9, Kor: "설명", Eng: "Description"},
	"tags": {Idx: 10, Kor: "태그", Eng: "Tags"},
	"link_attr": {Idx: 11, Kor: "링크", Eng: "Link"},
}