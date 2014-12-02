class Refrigerating < ActiveRecord::Base
	validates :ice_cream_id, :user_id, presence: true

	belongs_to :ice_cream
	belongs_to :user
end
