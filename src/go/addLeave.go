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

type AddLeave struct {
	LeaveName   string `json:"leavename,omitempty"`
	TotalCount  string `json:"count,omitempty"`
	MaxLeaves   string `json:"maxleaves,omitempty"`
	Description string `json:"desc,omitempty"`
	InProbation string `json:"probation,omitempty"`
	HalfDay     string `json:"halfday,omitempty"`
	Status      string `json:"status,omitempty"`
}

func addLeave(res http.ResponseWriter, req *http.Request) {
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

	var js AddLeave
	msgs := req.FormValue("json")

	err = json.Unmarshal([]byte(msgs), &js)
	if err != nil {
		fmt.Println("error:", err)
		status = "fail"
		//msg = "error while unmarshal json"
		log.Println(err)
	}

	q := fmt.Sprintf("insert into add_leave values('%s','%s','%s','%s','%s','%s','%s','%s')", uuid.New(), js.LeaveName, js.TotalCount, js.MaxLeaves,
		js.Description, js.InProbation, js.HalfDay, js.Status)
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
