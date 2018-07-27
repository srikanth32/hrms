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

type AddBankDetails struct {
	AccName    string `json:"accname,omitempty"`
	BankName   string `json:"bankname,omitempty"`
	Branch     string `json:"branch,omitempty"`
	AccNo      string `json:"accno,omitempty"`
	IFSC       string `json:"ifsc,omitempty"`
	AccType    string `json:"acctype,omitempty"`
	AnnualCTC  string `json:"annualctc,omitempty"`
	MonthlyCTC string `json:"monthlyctc,omitempty"`
}

func bankDetails(res http.ResponseWriter, req *http.Request) {
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

	var js AddBankDetails
	msgs := req.FormValue("json")

	err = json.Unmarshal([]byte(msgs), &js)
	if err != nil {
		fmt.Println("error:", err)
		status = "fail"
		//msg = "error while unmarshal json"
		log.Println(err)
	}

	q := fmt.Sprintf("insert into bank_details values('%s','%s','%s','%s','%s','%s','%s','%s','%s')", uuid.New(), js.AccName, js.BankName, js.Branch,
		js.AccNo, js.IFSC, js.AccType, js.AnnualCTC, js.MonthlyCTC)
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
