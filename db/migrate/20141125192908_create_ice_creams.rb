class CreateIceCreams < ActiveRecord::Migration
  def change
    create_table :ice_creams do |t|
    	t.string :flavor, null: false
    	t.integer :creamery_id, null: false
      t.timestamps
    end
  end
end
