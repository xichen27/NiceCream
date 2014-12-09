# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#ice-cream
IceCream.create!(flavor: "chocolate", creamery_id: 1, image_url: "http://brackenfellpersonaltrainer.com/wp-content/uploads/sites/2/2013/11/chocolate-ice-cream.jpg")
IceCream.create!(flavor: "vanilla", creamery_id: 2, image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYga80wcEEzSMfl1m29jXs3gmdDuwQZSUk_B_FbtkJJC0aZX0Zgg")
IceCream.create!(flavor: "strawberry", creamery_id: 3, image_url: "http://forum-media.finanzen.net/board/anonymize/attachment.m?aid=625503")
IceCream.create!(flavor: "green tea", creamery_id: 4, image_url: "http://thucphamplaza.com/wp-content/uploads/products_img/Kem-Haagen-Dazs-vi-tra-xanh.jpg")
IceCream.create!(flavor: "mango", creamery_id: 4, image_url: "http://images.tastespotting.com/thumbnails/547837.jpg")
IceCream.create!(flavor: "cookie dough", creamery_id: 2, image_url: "http://www.braums.com/wp-content/uploads/2012/05/PremCaramelCookDough.png")
IceCream.create!(flavor: "coffee", creamery_id: 1, image_url: "http://www.simplyrecipes.com/wp-content/uploads/2007/04/coffee-ice-cream.jpg")
IceCream.create!(flavor: "belgium chocolate", creamery_id: 3, image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREtr75SQJvBXQ_QuzxD9y53QuPWOmJ3jiPD4SVxYX8PHuk8JP_qA")


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



