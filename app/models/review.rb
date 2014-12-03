class Review < ActiveRecord::Base
	validates :ice_cream_id, :user_id, :rating, presence: true
	validates_uniqueness_of :ice_cream_id, :scope => [:user_id]

	belongs_to :user
	belongs_to :ice_cream

end
