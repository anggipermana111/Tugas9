package connection

import (
	"log"
	"movie/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func ConnectToDb() *gorm.DB {
	// alamat database
	dsn := "root:@tcp(127.0.0.1:3306)/movie"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalln(err)
	}

	db.AutoMigrate(&models.Movie{})

	return db
}
