# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


IceCream.create!(flavor: "chocolate", creamery_id: 1, image_url: "http://www.jamieoliver.com/core/images/jamie-mag/lrg_2838.jpg")
IceCream.create!(flavor: "vanilla", creamery_id: 1, image_url: "http://kitchenconfit.wordpress.com/files/2008/08/goat-cheese-ice-cream-top-view.jpg")
IceCream.create!(flavor: "strawberry", creamery_id: 1, image_url: "http://forum-media.finanzen.net/board/anonymize/attachment.m?aid=625503")

# Review.create(ice_cream_id: 1, user_id: 1, rating: 4)
# Review.create(ice_cream_id: 1, user_id: 2, rating: 3)
# Review.create(ice_cream_id: 1, user_id: 3, rating: 5)
# Review.create(ice_cream_id: 2, user_id: 1, rating: 4)
# Review.create(ice_cream_id: 2, user_id: 3, rating: 2)
# Review.create(ice_cream_id: 3, user_id: 1, rating: 4)

IceCream.find(1).reviews.create(user_id: 1, rating: 4)
IceCream.find(1).reviews.create(user_id: 2, rating: 5)
IceCream.find(2).reviews.create(user_id: 1, rating: 3)
IceCream.find(2).reviews.create(user_id: 3, rating: 1)
IceCream.find(3).reviews.create(user_id: 1, rating: 4)