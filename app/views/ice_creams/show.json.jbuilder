json.extract!(@ice_cream, :id, :flavor, :creamery_id)


json.reviews @ice_cream.reviews do |json, review|
	json.extract!(review, :id, :user_id, :rating, :content)
end

json.nice_boxes @ice_cream.nice_boxes do |json, nice_box|
	json.extract!(nice_box, :id, :name, :user_id)
end

json.fans @ice_cream.fans do |json, fan|
	json.extract!(fan, :id, :name)
end

