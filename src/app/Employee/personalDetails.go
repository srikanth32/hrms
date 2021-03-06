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
	"golang.org/x/crypto/bcrypt"
)

var mux *http.ServeMux

var db *sql.DB
var err error
var tpl *template.Template

func init() {
	db, err = sql.Open("mysql", "root:root@/hrms")
	//_, err := template.ParseGlob("*.js")
	if err != nil {
		log.Fatal("Error loading templates:" + err.Error())
	}
	//tpl = template.New("").ParseFiles("src/*")
}
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

// func userForm(w http.ResponseWriter, req *http.Request) {
// 	err = tpl.ExecuteTemplate(w, "PersonalDetails.js", nil)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusInternalServerError)
// 		return
// 	}
// }
func personalDetails(res http.ResponseWriter, req *http.Request) {
	if req.Method == http.MethodPost {
		//usr := user{}
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
		// bPass, e := bcrypt.GenerateFromPassword([]byte(req.FormValue("password")), bcrypt.MinCost)
		// if e != nil {
		// 	http.Error(res, e.Error(), http.StatusInternalServerError)
		// 	return
		// }
		//Password := bPass
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
func signupPage(res http.ResponseWriter, req *http.Request) {
	if req.Method != "POST" {
		http.ServeFile(res, req, "signup.html")
		return
	}

	username := req.FormValue("username")
	password := req.FormValue("password")

	var user string

	err := db.QueryRow("SELECT username FROM users WHERE username=?", username).Scan(&user)

	switch {
	case err == sql.ErrNoRows:
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
		if err != nil {
			http.Error(res, "Server error, unable to create your account.", 500)
			return
		}

		_, err = db.Exec("INSERT INTO users(username, password) VALUES(?, ?)", username, hashedPassword)
		if err != nil {
			http.Error(res, "Server error, unable to create your account.", 500)
			return
		}

		res.Write([]byte("User created!"))
		return
	case err != nil:
		http.Error(res, "Server error, unable to create your account.", 500)
		return
	default:
		http.Redirect(res, req, "/", 301)
	}
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
	mux = http.NewServeMux()
	//mux.Handle("/", http.FileServe(http.Dir("./app")))
	//http.HandleFunc("/PersonalDetails", userForm)
	http.HandleFunc("/PersonalDetails", personalDetails)
	//http.HandleFunc("/login", loginPage)
	http.HandleFunc("/Home", homePage)
	http.ListenAndServe(":8080", nil)
}
