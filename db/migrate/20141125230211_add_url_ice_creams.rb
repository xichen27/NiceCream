class AddUrlIceCreams < ActiveRecord::Migration
  def change
  	add_column :ice_creams, :image_url, :string
  end
end
