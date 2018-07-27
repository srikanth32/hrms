package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type Claims struct {
	ID          string
	ExpenseName string
	Amount      string
	Date        string
	Description string
}

func claimsList(res http.ResponseWriter, req *http.Request) {
	status := "true"
	code := 0
	check, err := getDBConnectivity(db)
	if !check {
		fmt.Println(err)
		//status = "false"
		//code = 1
		//msg = "error connecting to db"
	}
	//err = db.QueryRow("select id, expense_name,amount,date, description from claims WHERE id = ?", js.ID).Scan(&js.ID, &js.ExpenseName, &js.Amount, &js.Date, &js.Description)
	q := fmt.Sprintf("select id, expense_name,amount,date, description from claims ")
	rows, err := db.Query(q)
	if err != nil {
		fmt.Println(err)
		status = "false"
		//msg = "error fetching data from jobs table"
	}

	log.Println(rows)
	var x Claims
	var x1 []Claims

	for rows.Next() {
		err = rows.Scan(&x.ID, &x.ExpenseName, &x.Amount, &x.Date, &x.Description)
		if err != nil {
			fmt.Println(err)
			status = "false"
			//msg = "error while scaning rows from table"
		}
		x1 = append(x1, x)
	}

	if err != nil {
		fmt.Println(err.Error())
		status = "false"
	}

	w := Response{Status: status, Code: code, Message: x1}
	resp, err := json.Marshal(w)
	if err != nil {
		fmt.Println("error:", err)
	}

	fmt.Fprintf(res, string(resp))

}
