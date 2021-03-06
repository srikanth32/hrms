package main

import (
	"database/sql"
	"log"
	"net/http"
	"time"

	"github.com/rs/cors"
)

type Response struct {
	Status  string
	Code    int
	Message interface{}
}

var db, err = sql.Open("mysql", "root:root@/hrms")
var timezone, _ = time.LoadLocation("America/New_York")
var zone, _ = time.Now().In(timezone).Zone()

func getDBConnectivity(db *sql.DB) (bool, error) {
	err = db.Ping()
	if err != nil {
		log.Println("db connection: ", err.Error())
		return false, err
	}
	return true, nil
}

//var templates = template.Must(template.ParseFiles("src/app/Employee/PersonalDetails.js"))
func main() {

	//http.HandleFunc("/", userForm)
	router := http.NewServeMux()
	router.HandleFunc("/PersonalDetails", personalDetails)
	router.HandleFunc("/ProfessionalDetails", professionalDetails)
	router.HandleFunc("/AddComponent", addComponent)
	router.HandleFunc("/SignUp", signUp)
	router.HandleFunc("/CompanyDetails", companyDetails)
	router.HandleFunc("/AttendanceSettings", attendanceSettings)
	router.HandleFunc("/AddLeave", addLeave)
	router.HandleFunc("/AddClaims", addClaims)
	router.HandleFunc("/ClaimList", claimsList)
	router.HandleFunc("/JobHistory", jobHistory)
	router.HandleFunc("/EmpDocs", uploadFile)
	router.HandleFunc("/BankDetails", bankDetails)
	router.HandleFunc("/LoginInfo", logInfo)
	handler := cors.AllowAll().Handler(router)
	http.ListenAndServe(":3033", handler)
}
