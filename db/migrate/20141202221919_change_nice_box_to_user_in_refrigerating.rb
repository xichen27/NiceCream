class ChangeNiceBoxToUserInRefrigerating < ActiveRecord::Migration
  def change
  	rename_column :refrigeratings, :nice_box_id, :user_id
  end
end
