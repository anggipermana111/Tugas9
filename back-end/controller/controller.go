package controller

import (
	"encoding/json"
	"movie/connection"
	"movie/models"
	"net/http"

	"gorm.io/gorm"
)

var DB *gorm.DB

func init() {
	DB = connection.ConnectToDb()
}

func GetMovie(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		datajson := []models.Movie{
			{
				Movie_Id:    1,
				Title:       "Oppenheimer",
				Description: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
				Poster_Url:  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
			},
			{
				Movie_Id:    2,
				Title:       "Barbie",
				Description: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
				Poster_Url:  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
			},
			{
				Movie_Id:    3,
				Title:       "The Flash",
				Description: "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
				Poster_Url:  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
			},
			{
				Movie_Id:    4,
				Title:       "Transformers: Rise of the Beasts",
				Description: "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
				Poster_Url:  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
			},
			{
				Movie_Id:    5,
				Title:       "The Flood",
				Description: "A horde of giant hungry alligators is unleashed on a group of in-transit prisoners and their guards after a massive hurricane floods Louisiana.",
				Poster_Url:  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg",
			},
		}

		res, err := json.Marshal(datajson)
		if err != nil {
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "*")
		w.Header().Set("Access-Control-Allow-Headers", "*")

		w.Write(res)
		w.WriteHeader(200)
		return
	}
	http.Error(w, "Error Not Found", 404)
}
