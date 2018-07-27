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

type AddCompany struct {
	OrganizationName   string `json:"orgname,omitempty"`
	URL                string `json:"url,omitempty"`
	FinancialYearMonth string `json:"finyearmonth,omitempty"`
	BusinessType       string `json:"businesstype,omitempty"`
	Address            string `json:"add,omitempty"`
	State              string `json:"state,omitempty"`
	Country            string `json:"country,omitempty"`
	Description        string `json:"desc,omitempty"`
	PhoneNumber        string `json:"phone,omitempty"`
	Email              string `json:"email,omitempty"`
	RegistrationNo     string `json:"regno,omitempty"`
	PAN                string `json:"pan,omitempty"`
	TAN                string `json:"tan,omitempty"`
	TANCircle          string `json:"tancircle,omitempty"`
}

func companyDetails(res http.ResponseWriter, req *http.Request) {
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

	var js AddCompany
	msgs := req.FormValue("json")

	err = json.Unmarshal([]byte(msgs), &js)
	if err != nil {
		fmt.Println("error:", err)
		status = "fail"
		//msg = "error while unmarshal json"
		log.Println(err)
	}

	q := fmt.Sprintf("insert into company_details values('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", uuid.New(), js.OrganizationName, js.URL, js.FinancialYearMonth,
		js.BusinessType, js.Address, js.State, js.Country, js.Description, js.PhoneNumber, js.Email, js.RegistrationNo, js.PAN, js.TAN, js.TANCircle)
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
