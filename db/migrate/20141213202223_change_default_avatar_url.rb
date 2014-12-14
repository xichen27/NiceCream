class ChangeDefaultAvatarUrl < ActiveRecord::Migration
  def change
  	 change_column :users, :avatar_url, :string, default: "/assets/avatar_image.png"
  end
end


