json.extract!(ice_cream, :id, :flavor, :creamery_id, :image_url)

json.average_rating ice_cream.average_rating

json.reviews ice_cream.reviews do |json, review|
	json.extract!(review, :id, :user_id, :rating, :content)
end

json.reviewers ice_cream.reviewers do |json, reviewer|
	json.extract!(reviewer, :id, :username)
end

json.fans ice_cream.fans do |json, fan|
	json.extract!(fan, :id, :username)
end

json.creamery ice_cream.creamery do |json|
	json.extract!(creamery, :id, :name, :location)
end