# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#ice-cream
IceCream.create!(flavor: "chocolate", creamery_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/nicecreamsimages/chocolate-ice-cream-ginos.jpg")
IceCream.create!(flavor: "vanilla", creamery_id: 2, image_url: "https://s3-us-west-1.amazonaws.com/nicecreamsimages/vanila-hagen-daz.jpeg")
IceCream.create!(flavor: "strawberry", creamery_id: 3, image_url: "https://s3-us-west-1.amazonaws.com/nicecreamsimages/strawberry-ben-and-jerry.jpeg")
IceCream.create!(flavor: "green tea", creamery_id: 4, image_url: "https://s3-us-west-1.amazonaws.com/nicecreamsimages/green-tea-red-mango.jpg")
IceCream.create!(flavor: "mango", creamery_id: 4, image_url: "https://s3-us-west-1.amazonaws.com/nicecreamsimages/mango-red-mango.jpg")
IceCream.create!(flavor: "cookie dough", creamery_id: 2, image_url: "https://s3-us-west-1.amazonaws.com/nicecreamsimages/cookie-dough-hagen-daz.png")
IceCream.create!(flavor: "coffee", creamery_id: 1, image_url: "https://s3-us-west-1.amazonaws.com/nicecreamsimages/coffee-ginos.jpg")
IceCream.create!(flavor: "chocolate", creamery_id: 2, image_url: "https://s3-us-west-1.amazonaws.com/nicecreamsimages/chocolate-hagen-daz.jpg")
IceCream.create!(flavor: "vanilla", creamery_id: 5, image_url: "")
IceCream.create!(flavor: "strawberry", creamery_id: 8 , image_url: "")
IceCream.create!(flavor: "coffee", creamery_id: 7 , image_url: "")
IceCream.create!(flavor: "green tea", creamery_id: 2, image_url: "")
IceCream.create!(flavor: "cookie dough", creamery_id: 6 , image_url: "")
IceCream.create!(flavor: "", creamery_id: , image_url: "")
IceCream.create!(flavor: "", creamery_id: , image_url: "")
IceCream.create!(flavor: "", creamery_id: , image_url: "")
IceCream.create!(flavor: "", creamery_id: , image_url: "")


#reviews
IceCream.find(1).reviews.create(user_id: 1, rating: 5)
IceCream.find(1).reviews.create(user_id: 2, rating: 3)
IceCream.find(2).reviews.create(user_id: 1, rating: 2)
IceCream.find(2).reviews.create(user_id: 3, rating: 4)
IceCream.find(3).reviews.create(user_id: 1, rating: 1)
IceCream.find(1).reviews.create(user_id: 4, rating: 5)

#refrigerating(ice_cream_id, nice_box_id)
Refrigerating.create!(ice_cream_id: 1, user_id: 1)
Refrigerating.create!(ice_cream_id: 1, user_id: 2)
Refrigerating.create!(ice_cream_id: 3, user_id: 3)
Refrigerating.create!(ice_cream_id: 2, user_id: 1)
Refrigerating.create!(ice_cream_id: 2, user_id: 4)
# Refrigerating.create!(ice_cream_id: 3, user_id: 4)


#user(name)
User.create!(username: "user1", password: "password")
User.create!(username: "user2", password: "password")
User.create!(username: "user3", password: "password")
User.create!(username: "xi", password: "password")

Creamery.create!(name: "Ginos")
Creamery.create!(name: "Hagen Daz")
Creamery.create!(name: "Ben and Jerry's")
Creamery.create!(name: "Red Mango")
Creamery.create!(name: "Cold Stone")
Creamery.create!(name: "Baskin-Robbins")
Creamery.create!(name: "Carvel")
Creamery.create!(name: "San Francisco Creamery")





