package main

import (
	"fmt"
	"movie/controller"
	"net/http"
)

func main() {

	http.HandleFunc("/getmovie", controller.GetMovie)

	fmt.Println("Running Service")

	if err := http.ListenAndServe(":5000", nil); err != nil {
		fmt.Println("Error Starting Service")
	}
}
