class ChangeIceBoxToNiceBox < ActiveRecord::Migration
  def change
  	rename_column :refrigerated_ice_creams, :ice_box_id, :nice_box_id
  end
end
