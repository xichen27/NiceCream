# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#ice-cream
IceCream.create!(flavor: "chocolate", creamery_id: 1, image_url: "http://www.jamieoliver.com/core/images/jamie-mag/lrg_2838.jpg")
IceCream.create!(flavor: "vanilla", creamery_id: 1, image_url: "http://kitchenconfit.wordpress.com/files/2008/08/goat-cheese-ice-cream-top-view.jpg")
IceCream.create!(flavor: "strawberry", creamery_id: 1, image_url: "http://forum-media.finanzen.net/board/anonymize/attachment.m?aid=625503")

#reviews
IceCream.find(1).reviews.create(user_id: 1, rating: 4)
IceCream.find(1).reviews.create(user_id: 2, rating: 5)
IceCream.find(2).reviews.create(user_id: 1, rating: 3)
IceCream.find(2).reviews.create(user_id: 3, rating: 1)
IceCream.find(3).reviews.create(user_id: 1, rating: 4)

#refrigerating(ice_cream_id, nice_box_id)
Refrigerating.create!(ice_cream_id: 1, nice_box_id: 1)
Refrigerating.create!(ice_cream_id: 1, nice_box_id: 2)
Refrigerating.create!(ice_cream_id: 3, nice_box_id: 2)
Refrigerating.create!(ice_cream_id: 2, nice_box_id: 3)

#nice_box(name, user_id)
NiceBox.create!(name: "nicebox1", user_id: 1)
NiceBox.create!(name: "nicebox2", user_id: 2)
NiceBox.create!(name: "nicebox3", user_id: 3)

#user(name)
User.create!(username: "user1", password: "password")
User.create!(username: "user2", password: "password")
User.create!(username: "user3", password: "password")