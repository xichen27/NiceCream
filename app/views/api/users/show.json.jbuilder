json.extract!(@user, :id, :username)


json.reviews @user.reviews do |json, review|
	json.extract!(review, :id, :ice_cream_id, :rating, :content)
end

json.reviewed_ice_creams @user.reviewed_ice_creams do |json, reviewed_ice_creams|
	json.extract!(reviewed_ice_creams, :id, :flavor, :creamery_id, :image_url)
end

json.refrigeratings @user.refrigeratings do |json, refrigerating|
	json.extract!(refrigerating, :id, :ice_cream_id, :user_id)
end

json.refrigerated_ice_creams @user.refrigerated_ice_creams do |json, refrigerated_ice_cream|
	json.extract!(refrigerated_ice_cream, :id, :flavor, :creamery_id, :image_url)
end
