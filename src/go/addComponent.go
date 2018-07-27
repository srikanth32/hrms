package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/pborman/uuid"
)

//var db *sql.DB
//var err error
//var tpl *template.Template

type AddComponent struct {
	ComponentName string `json:"componentname,omitempty"`
	Calculation   string `json:"calc,omitempty"`
	Taxable       string `json:"tax,omitempty"`
	Description   string `json:"desc,omitempty"`
	ComponentType string `json:"comptype,omitempty"`
	AmountType    string `json:"amountype,omitempty"`
	Status        string `json:"status,omitempty"`
}

func addComponent(res http.ResponseWriter, req *http.Request) {
	status := "true"
	//msg := "Registration Successful"
	code := 0
	check, err := getDBConnectivity(db)
	if !check {
		fmt.Println(err)
		status = "fail"
		code = 1
		//msg = "error connecting to db"
	}

	var js AddComponent
	msgs := req.FormValue("json")

	err = json.Unmarshal([]byte(msgs), &js)
	if err != nil {
		fmt.Println("error:", err)
		status = "fail"
		//msg = "error while unmarshal json"
		log.Println(err)
	}

	q := fmt.Sprintf("insert into add_component values('%s','%s','%s','%s','%s','%s','%s','%s')", uuid.New(), js.ComponentName, js.Calculation, js.Taxable,
		js.Description, js.ComponentType, js.AmountType, js.Status)
	_, err = db.Exec(q)
	if err != nil {
		fmt.Println(err)
		status = "fail"
		//msg = "error while while inserting data"
	}

	w := Response{Status: status, Code: code}
	resp, err := json.Marshal(w)
	if err != nil {
		fmt.Println("error:", err)
	}

	//fmt.Println(string(resp))
	fmt.Fprintf(res, string(resp))

}
