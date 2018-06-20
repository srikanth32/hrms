package main

import "net/http"

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
