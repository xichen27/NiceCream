class Refrigerating < ActiveRecord::Base
	validates :ice_cream_id, :user_id, presence: true
	validates_uniqueness_of :ice_cream_id, :scope => [:user_id]

	belongs_to :ice_cream
	belongs_to :user
end
