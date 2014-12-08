json.extract!(ice_cream, :id, :flavor, :creamery_id, :image_url)

json.creamery  do |json|
	json.(ice_cream.creamery, :id, :name)
end

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
