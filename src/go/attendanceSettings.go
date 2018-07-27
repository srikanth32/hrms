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

type AddAttendance struct {
	ShiftName   string `json:"shiftname,omitempty"`
	StartTime   string `json:"start,omitempty"`
	EndTime     string `json:"end,omitempty"`
	Description string `json:"desc,omitempty"`
	LateTime    string `json:"late,omitempty"`
	Overtime    string `json:"overtime,omitempty"`
	Status      string `json:"status,omitempty"`
}

func attendanceSettings(res http.ResponseWriter, req *http.Request) {
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

	var js AddAttendance
	msgs := req.FormValue("json")

	err = json.Unmarshal([]byte(msgs), &js)
	if err != nil {
		fmt.Println("error:", err)
		status = "fail"
		//msg = "error while unmarshal json"
		log.Println(err)
	}

	q := fmt.Sprintf("insert into attendance values('%s','%s','%s','%s','%s','%s','%s','%s')", uuid.New(), js.ShiftName, js.StartTime, js.EndTime,
		js.Description, js.LateTime, js.Overtime, js.Status)
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
