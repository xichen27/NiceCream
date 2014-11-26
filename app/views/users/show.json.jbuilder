json.extract!(@user, :id, :username)


json.reviews @user.reviews do |json, review|
	json.extract!(review, :id, :ice_cream_id, :rating, :content)
end

json.nice_boxes @user.nice_boxes do |json, nice_box|
	json.extract!(nice_box, :id, :name)
end

json.refrigerated_ice_creams @user.refrigerated_ice_creams do |json, refrigerated_ice_cream|
	json.extract!(refrigerated_ice_cream, :id, :flavor, :creamery_id)
end