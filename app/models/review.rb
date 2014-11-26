class Review < ActiveRecord::Base
	validates :ice_cream_id, :user_id, :rating, presence: true

	belongs_to :user
	belongs_to :ice_cream

end
