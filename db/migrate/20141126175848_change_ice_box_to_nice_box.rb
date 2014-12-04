class ChangeIceBoxToNiceBox < ActiveRecord::Migration
  def change
  	rename_column :refrigeratings, :ice_box_id, :nice_box_id
  end
end
