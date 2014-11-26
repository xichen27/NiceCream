class Refrigerating < ActiveRecord::Base
	validates :ice_cream_id, :nice_box_id, presence: true

	belongs_to :ice_cream
	belongs_to :nice_box
end
