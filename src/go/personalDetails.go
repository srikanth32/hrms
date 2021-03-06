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

type RegisterData struct {
	FathersName    string `json:"fathersname,omitempty"`
	DOB            string `json:"dob,omitempty"`
	Gender         string `json:"gender,omitempty"`
	Phone          string `json:"phone,omitempty"`
	Add            string `json:"add,omitempty"`
	Nationality    string `json:"nationality,omitempty"`
	Status         string `json:"status,omitempty"`
	ContactName    string `json:"contactname,omitempty"`
	EmergencyPhone string `json:"emergencyphone,omitempty"`
	Relationship   string `json:"relationship,omitempty"`
	Email          string `json:"email,omitempty"`
}

func personalDetails(res http.ResponseWriter, req *http.Request) {
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

	var js RegisterData
	msgs := req.FormValue("json")

	err = json.Unmarshal([]byte(msgs), &js)
	if err != nil {
		fmt.Println("error:", err)
		status = "fail"
		//msg = "error while unmarshal json"
		log.Println(err)
	}

	q := fmt.Sprintf("insert into personal_details values('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", uuid.New(), js.FathersName, js.DOB, js.Gender,
		js.Phone, js.Add, js.Nationality, js.Status, js.ContactName, js.EmergencyPhone, js.Relationship, js.Email)
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
