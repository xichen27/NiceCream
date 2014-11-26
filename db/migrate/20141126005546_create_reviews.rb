class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
    	t.integer :ice_cream_id, null: false
    	t.integer :user_id, null: false
    	t.integer :rating, null: false
    	t.integer :content
      t.timestamps
    end
  end
end
