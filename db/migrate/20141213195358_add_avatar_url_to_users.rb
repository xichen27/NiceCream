class AddAvatarUrlToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :avatar_url, :string, default: "https://s3-us-west-1.amazonaws.com/nicecreamsimages/avatar_image.gif"
  end
end
