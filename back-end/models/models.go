package models

type Movie struct {
	Movie_Id    int    `gorm:"primaryKey;autoIncrement" json:"movie_id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Poster_Url  string `json:"poster_url"`
}
