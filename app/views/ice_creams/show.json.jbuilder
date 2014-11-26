json.extract!(@ice_cream, :id, :flavor, :creamery_id)


json.reviews @ice_cream.reviews do |json, review|
	json.extract!(review, :id, :user_id, :ice_cream_id, :rating, :content)
end

