class DropNiceBoxTable < ActiveRecord::Migration
  def change
  	drop_table :nice_boxes
  end
end
