class CreateCreameries < ActiveRecord::Migration
  def change
    create_table :creameries do |t|
    	t.string :name, null: false
    	t.string :location

      t.timestamps
    end
  end
end
