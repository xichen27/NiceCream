class CreateRefrigeratedIceCreams < ActiveRecord::Migration
  def change
    create_table :refrigerateings do |t|
    	t.integer :ice_cream_id, null: false
    	t.integer :ice_box_id, null: false
      t.timestamps
    end
  end
end
