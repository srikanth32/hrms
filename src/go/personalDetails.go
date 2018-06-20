package main

import (
	"database/sql"
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB
var err error
var tpl *template.Template

func ParseTemplates() *template.Template {
	templ := template.New("")
	err := filepath.Walk("./src/app", func(path string, info os.FileInfo, err error) error {
		if strings.Contains(path, ".js") {
			_, err = templ.ParseFiles(path)
			if err != nil {
				log.Println(err)
			}
		}

		return err
	})

	if err != nil {
		panic(err)
	}

	return templ
}
func init() {
	// repoFrontend := "src/*.js"
	// http.Handle("/static/", http.StripPrefix("/static/",
	// 	http.FileServer(http.Dir(repoFrontend))))
	db, err = sql.Open("mysql", "root:root@/hrms")
	//_, err := template.ParseGlob("src/*.js")
	if err != nil {
		log.Fatal("Error loading templates:" + err.Error())
	}
	//tpl = template.New("").ParseFiles("src/*")
}

func userForm(w http.ResponseWriter, req *http.Request) {
	err = tpl.ExecuteTemplate(w, "PersonalDetails.js", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
func personalDetails(res http.ResponseWriter, req *http.Request) {
	if req.Method == http.MethodPost {
		fname := req.FormValue("fathersname")
		dob := req.FormValue("dob")
		gender := req.FormValue("gender")
		phone := req.FormValue("phone")
		addr := req.FormValue("add")
		nation := req.FormValue("nationality")
		status := req.FormValue("status")
		contactname := req.FormValue("contactname")
		emercontact := req.FormValue("emergencyphone")
		relationship := req.FormValue("relationship")
		email := req.FormValue("email")
		_, err = db.Exec(
			"INSERT INTO personal_details (fathersname, dob, gender, permanentaddress,nationality,maritalstatus,emergencycontactname,emergencyphone,relationship,email) VALUES (?, ?, ?, ?)",
			fname,
			dob,
			gender,
			phone,
			addr,
			nation,
			status,
			contactname,
			emercontact,
			relationship,
			email,
		)
		if err != nil {
			http.Error(res, err.Error(), http.StatusInternalServerError)
			return
		}
		http.Redirect(res, req, "/", http.StatusSeeOther)
		return
	}
	http.Error(res, "Method Not Supported", http.StatusMethodNotAllowed)

}

func homePage(res http.ResponseWriter, req *http.Request) {
	http.ServeFile(res, req, "index.js")
}

func main() {

	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err.Error())
	}
	//http.HandleFunc("/AddEmployee", userForm)
	http.HandleFunc("/personalDetails", personalDetails)
	http.HandleFunc("/Home", homePage)
	//http.HandleFunc("/login", loginPage)
	//http.HandleFunc("/", homePage)
	http.ListenAndServe(":8080", nil)
}
