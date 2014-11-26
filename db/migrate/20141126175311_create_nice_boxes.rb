class CreateNiceBoxes < ActiveRecord::Migration
  def change
    create_table :nice_boxes do |t|
    	t.string :name, null: false
    	t.integer :user_id, null: false
      t.timestamps
    end
  end
end
